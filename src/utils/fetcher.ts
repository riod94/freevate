const fetcher = (url: string) =>
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Server response status is not OK");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw new Error(error);
    });

export default fetcher;
