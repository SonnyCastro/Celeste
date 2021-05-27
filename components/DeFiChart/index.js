import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const index = ({ topTenDefi }) => {
  return (
    <div>
      {topTenDefi?.map((defi) => {
        return (
          <div className={styles.defiContainer} id={defi.id} key={defi.id}>
            <div>
              <Image
                className={styles.defiImg}
                src={defi.image}
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <p className={styles.symbol}>{defi.symbol}</p>
            {/* <p className={styles.symbol2}>{defi.symbol}</p> */}
            <p className={styles.currentPrice}>
              ${defi.current_price.toFixed(2)}
            </p>
            {defi.price_change_percentage_24h < 0 ? (
              <p className={(styles.currentPriceChange, styles.red)}>
                {defi.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className={(styles.currentPriceChange, styles.green)}>
                {defi.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
            {/* <p className={styles.currentPriceChange}>{defi.price_change_percentage_24h.toFixed(2)}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default index;
