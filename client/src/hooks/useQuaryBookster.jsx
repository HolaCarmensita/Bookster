import { useEffect, useState } from "react";
import adminService from "../service/adminService";

export function UseQuaryBookster(quary) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const resultIntervalId = setInterval(async () => {
      let data = undefined;
      if (quary === "user") {
        data = await adminService.getUsers();
      } else if (quary === "" || quary === "books") {
        const result = await fetch("http://127.0.0.1:3030/library/books").then((resp) => resp.json());
        data = result.books;
      } else {
        data = await fetch(`http://127.0.0.1:3030/library/books/search/${quary}`).then((resp) => resp.json());
      }
      if (data.length > 0) {
        setData(data);
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(resultIntervalId);
  }, [quary]);

  return { isLoading, error, data };
}
