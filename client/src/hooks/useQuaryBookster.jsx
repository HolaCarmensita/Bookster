/**
 * author Niklas Nguyen
 *
 * date 23-05-31
 *
 * a custom hook to fetch diffrent data depending of quary propertys and uses interval to make a short polling every second and if the version updates it makes another api call
 */

import { useEffect, useState } from "react";
import adminService from "../service/adminService";

export function UseQuaryBookster(quary) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined);
  const [version, setVersion] = useState(-1);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const id = setInterval(async () => {
      if (quary === "user") {
        const result = await adminService.getUsers();
        if (version === result.version) return false;
        setVersion(result.version);
      } else {
        const result = await fetch("http://127.0.0.1:3030/library/books").then((resp) => resp.json());
        if (version === result.version) return false;
        setVersion(result.version);
        console.log(result.version);
      }
    }, 1000);
    const resultIntervalId = setTimeout(async () => {
      let data = undefined;
      if (quary === "user") {
        const result = await adminService.getUsers();
        data = result.users;
      } else if (quary === "" || quary === "books") {
        const result = await fetch("http://127.0.0.1:3030/library/books").then((resp) => resp.json());
        data = result.books;
      } else {
        console.log(quary);
        const result = await fetch(`http://127.0.0.1:3030/library/books/search/${quary}`).then((resp) => resp.json());
        data = result.books;
      }
      if (data.length > 0) {
        setData(data);
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 1000);

    return () => {
      clearInterval(id);
      clearTimeout(resultIntervalId);
    };
  }, [quary, version]);

  return { isLoading, error, data };
}
