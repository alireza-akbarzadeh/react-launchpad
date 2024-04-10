import { useEffect, useState } from "react";

export type Result<T> =
  | ["loading", undefined?]
  | ["success", T]
  | ["error", Error];

export const useData = <T,>(url: string): Result<T> => {
  const [result, setResult] = useState<Result<T>>(["loading"]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(["success", data]))
      .catch((error) => setResult(["error", error]));
  }, [url]);

  return result;
};
