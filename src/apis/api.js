export const hitApi = async (signal) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        signal,
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      return "Request Aborted ";
    }
    return err;
  }
};
