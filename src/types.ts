type Maybe<T> = T | undefined;

interface ZNS {
  registrar : string;
  domainPurchaser : string;
  subregistrarBeacon : string;
  znsHub : string;
  basicController : string;
  zDAO : string;
}

interface zAuction {
  zAuction : string;
  legacyZAuction : string;
}

interface Tokens {
  wildToken : string;
  lootToken : string;
  zeroToken : string;
}
interface Staking {
  stakeFactory : string;
  lpToken : string;
  wildStakingPool : string;
  lpStakingPool : string;
}

interface Collection {
  name : string;
  type : "domain" | "collection";
  domainContract : string;
  nftContract ?: Maybe<string>;
  subcollections ?: Maybe<Array<Collection>>;
}

export interface Protocols {
  [network : string] : {
    zNS : ZNS;
    zAuction : zAuction;
    tokens : Tokens;
    staking : Staking;
    sales : Array<Collection>;
  };
}