import { useState } from "react";

export const useFrbRequestUpdateSmartphone = (
  refreshProductsFlag,
  setRefreshProductsFlag,
) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const requestUpdateSmartphone = () => {
    setIsUpdating(true);
    fetch("http://localhost:3000/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "Smart",
        price: 100,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("smartphone is cheaper", response);
        setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsUpdating(false));
  };

  return { isUpdating, requestUpdateSmartphone };
};
