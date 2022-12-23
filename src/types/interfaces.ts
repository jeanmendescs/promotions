export interface IPromotions {
  isNewCustomer: boolean;
}

export interface ITabs {
  tabs: ["All Promotions", "New Customers"];
}

export interface IPromotionsData {
  id: string;
  name: string;
  description: string;
  heroImageUrl: string;
  onlyNewCustomers: boolean;
  termsAndConditionsButtonText: string;
  joinNowButtonText: string;
  sequence: number;
}

export interface IGetPromotions {
  id: string;
  promotions: IPromotionsData[];
}
