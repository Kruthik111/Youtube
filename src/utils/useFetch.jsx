import { useEffect, useRef, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  // const [pending, setPending] = useState(false);
  // const [error, setError] = useState(null);
  // const dataRef = useRef(null);
  const pendingRef = useRef(null);
  const errorRef = useRef(null);

  async function fetchData() {
    // setPending(true);
    pendingRef.current = false;
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      // console.log(result.items);
      setData(result.items);
      // setError(null);
      // setPending(false);
      // dataRef.current = result.items;
      errorRef.current = null;
      pendingRef.current = false;
    } catch (e) {
      // setError(`${e}. Some Error Occured`);
      errorRef.current = `${e}. Some Error Occured`;

      // setPending(false);
      pendingRef.current = false;
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  // return { data, error, pending };
  return {
    data,
    error: errorRef.current,
    pending: pendingRef.current,
  };
}
