import { useEffect, useState } from "react";
import adminService from "../service/adminService";

export function UseAdminBookster(view) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const resultTimeoutId = setTimeout(async () => {
      let data = undefined;
      if (view === "user") {
        data = await adminService.getUsers();
      } else {
        const result = await fetch("http://127.0.0.1:3030/library/books").then((resp) => resp.json());
        data = result.books;
      }

      if (data.length > 0) {
        setData(data);
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(resultTimeoutId);
  }, [view]);

  return { isLoading, error, data };
}
