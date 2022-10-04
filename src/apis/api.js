export const hitApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
