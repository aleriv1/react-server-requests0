import { useEffect, useState } from "react";

export const UseEffectNew = () => {
  const [counter, setCounter] = useState(0);
  const onClickHandler = () => {
    console.log("Alena!");
  };

  useEffect(() => {
    console.log(`The first -- ${counter}`);
    document.addEventListener("click", onClickHandler);

    return () => {
      console.log(`The second ${counter}`);
      document.removeEventListener("click", onClickHandler);
    };
    // }, []);
  }, [counter]);

  return (
    <>
      <h2>Alena</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
