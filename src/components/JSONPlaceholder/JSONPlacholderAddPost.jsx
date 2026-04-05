import { useEffect, useState } from "react";
// import styles from "./App.css";

export const JSONPlacholderAddPost = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const requestAddPost = () => {
    setIsCreating(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        // setProducts([...products, response]);
        setProducts([response, ...products]);
        console.log("Статья добавлена, ответ сервера: ", response);
      })
      .finally(() => setIsCreating(false));
  };

  return (
    // <div className={styles.app}>
    <div className="">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        products
          .map(({ id, title, body }) => (
            <div key={id} style={{ border: "1px solid black" }}>
              {title} - {body}
            </div>
          ))
          .slice(0, 3)
      )}
      <button disabled={isCreating} onClick={requestAddPost}>
        Добавить статью
      </button>
    </div>
  );
};
