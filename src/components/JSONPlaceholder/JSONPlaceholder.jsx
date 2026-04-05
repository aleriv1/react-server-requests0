import { useEffect, useState } from "react";

export const JSONPlaceholder = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("start");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Alena is greate and love</h2>
      {loading ? (
        <div className="">loading</div>
      ) : (
        data
          .map((comment) => {
            return (
              <div key={comment.id} className="">
                {comment.body}
              </div>
            );
          })
          .slice(0, 3)
      )}
    </>
  );
};
