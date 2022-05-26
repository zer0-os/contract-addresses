export interface Networks {
  [networkName: string]: Categories;
}

interface Categories {
  infra: Addresses;
  tokens: Addresses;
  staking: Addresses;
  sales: Sales;
}

interface Addresses {
  [contractName: string]: string;
}
interface Sales {
  [saleName: string]: string | SaleSeason;
}

interface SaleSeason {
  [seasonName: string]: string;
}