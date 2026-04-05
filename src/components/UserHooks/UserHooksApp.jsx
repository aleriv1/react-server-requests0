import { useState, useEffect } from "react";
import {
  useRequestAddVacuumCleaner,
  useRequestUpdateSmartphone,
  useRequestDeleteFan,
  useRequestGetProducts,
} from "./index";

import styles from "./UserHooksApp.module.scss";

export const UserHooksApp = () => {
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const { products, isLoading } = useRequestGetProducts(refreshProductsFlag);

  const { isCreating, requestAddVacuumCleaner } = useRequestAddVacuumCleaner(
    refreshProductsFlag,
    setRefreshProductsFlag,
  );

  const { isUpdating, requestUpdateSmartphone } = useRequestUpdateSmartphone(
    refreshProductsFlag,
    setRefreshProductsFlag,
  );

  const { isDeleting, requestDeleteFan } = useRequestDeleteFan(
    refreshProductsFlag,
    setRefreshProductsFlag,
  );

  return (
    <>
      <h2>JSON Server</h2>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => {
          return (
            <div key={id}>
              {name} - {price}
            </div>
          );
        })
      )}
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        add vacuum cleaner
      </button>
      <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
        update smartphone
      </button>
      <button disabled={isDeleting} onClick={requestDeleteFan}>
        delete fan
      </button>
    </>
  );
};
