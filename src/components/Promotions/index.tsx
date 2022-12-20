import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { IPromotions, IPromotionsData } from "../../types/interfaces";

function Promotions({ isNewCustomer }: IPromotions) {
  const [promotions, setPromotions] = useState<IPromotionsData[]>([]);

  const filterData = useCallback(
    (list: IPromotionsData[]) => {
      const sortPromotions = list.sort((a, b) => a.sequence - b.sequence);

      if (isNewCustomer) {
        return sortPromotions.filter((promotion) => promotion.onlyNewCustomers);
      }

      return sortPromotions;
    },
    [isNewCustomer],
  );

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
      .then(({ data }) => setPromotions(filterData(data)))
      .catch();
  }, [filterData, isNewCustomer]);

  return (
    <div className="promotions">
      {promotions.map((promotion) => {
        return (
          <div className="promotion" key={promotion.id}>
            <div className="promotions__img-container">
              <img
                className="promotions__img"
                src={promotion.heroImageUrl}
                alt={promotion.name}
              />
            </div>
            <div className="promotions__content">
              <h1 className="promotions__title">{promotion.name}</h1>
              <p className="promotions__description">{promotion.description}</p>
              <div className="promotions__button-container">
                <button className="promotions__button" type="button">
                  {promotion.termsAndConditionsButtonText}
                </button>
                <button
                  className="promotions__button promotions__button--join"
                  type="button"
                >
                  {promotion.joinNowButtonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Promotions;
