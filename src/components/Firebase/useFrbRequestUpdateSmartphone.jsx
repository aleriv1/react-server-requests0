import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";

export const useFrbRequestUpdateSmartphone = () => {
  const [isUpdating, setIsUpdating] = useState(true);

  const requestUpdateSmartphone = () => {
    const smartphoneDbRef = ref(db, "products/002");

    set(smartphoneDbRef, {
      name: "smartPhone",
      price: 100_000,
    })
      .then((response) => {
        console.log("smartphone is cheaper", response);
      })
      .finally(() => setIsUpdating(false));
  };

  return { isUpdating, requestUpdateSmartphone };
};
