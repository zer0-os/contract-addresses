export interface Networks {
  [networkName: string]: Maybe<Categories>;
}

export interface Categories {
  zNS: Addresses;
  zAuction: Addresses;
  tokens: Addresses;
  staking: Addresses;
  sales: Sales;
}

export interface Addresses {
  [contractName: string]: Maybe<string>;
}
export interface Sales {
  [saleName: string]: Maybe<string | SaleSeason>;
}

export interface SaleSeason {
  [seasonName: string]: Maybe<string>;
}

type Maybe<T> = T | undefined | null;
