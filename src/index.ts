import { Protocols } from "./types";
export * from "./types";

export const defaultRegistrar = "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D";

export const contracts : Protocols = {
  mainnet: {
    zNS: {
      registrar: defaultRegistrar,
      domainPurchaser: "",
      subregistrarBeacon: "0x4CD06F23e9Cc5658acCa6D5d681511f3d5616bc9",
      znsHub: "0x3F0d0a0051D1E600B3f6B35a07ae7A64eD1A10Ca",
      basicController: "0xa05Ae774Da859943B7B859cd2A6aD9F5f1651d6a",
      zDAO: "0x7701913b65C9bCDa4d353F77EC12123d57D77f1e",
    },
    zAuction: {
      zAuction: "0x411973Fa81158A4c7767a0D6F7dF62723fDd541F",
      legacyZAuction: "0x05cBD37cA528B7ea50800aA80ddD0F9F30C952F0",
    },
    tokens: {
      wildToken: "0x2a3bFF78B79A009976EeA096a51A948a3dC00e34",
      lootToken: "0x43b8219aC1883373C0428688eE1a76e19E6B6D9d",
      zeroToken: "0x0eC78ED49C2D27b315D462d43B5BAB94d2C79bf8",
    },
    staking: {
      stakeFactory: "0xF133faFd49f4671ac63EE3a3aE7E7C4C9B84cE4a",
      lpToken: "0xcaA004418eB42cdf00cB057b7C9E28f0FfD840a5",
      wildStakingPool: "0x3aC551725ac98C5DCdeA197cEaaE7cDb8a71a2B4",
      lpStakingPool: "0x9E87a268D42B0Aba399C121428fcE2c626Ea01FF",
    },
    // For every sale, the top level domain of the sale is on the default registrar above
    sales: [
      {
        name: "guild",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "frank",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          },
          {
            name: "jpierce",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          },
          {
            name: "knight",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          }
        ]
      },
      {
        name: "WoW",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "poster",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          }
        ]
      },
      {
        name: "concept",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "architecture",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          },
          {
            name: "environment",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          },
          {
            name: "sketches",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar
          }
        ]
      },
      {
        name: "moto",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "genesis",
            type: "collection",
            domainContract: "0x0025Dd25E1aD8C35a63d690E48162BBE844C7882",
            nftContract: "0x51bd5948CF84a1041d2720F56DEd5e173396FC95",
          },
        ],
      },
      {
        name: "pals",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "gen",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: "0x90a1f4B78Fa4198BB620b7686f510FD476Ec7A0B",
          },
        ],
      },
      {
        name: "wheels",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "genesis",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar,
          },
        ],
      },
      {
        name: "beasts",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "wape",
            type: "collection",
            domainContract: "0x23682326C87D079F73bd88402efD341E07731aE8",
            nftContract: "0x05F81F870cBca79E9171f22886b58b5597A603AA",
          },
          {
            name: "wolf",
            type: "collection",
            domainContract: "0x23682326C87D079F73bd88402efD341E07731aE8",
            nftContract: "0x1A178CFD768F74b3308cbca9998C767F4E5B2CF8",
          },
        ],
      },
      {
        name: "kicks",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "airwild",
            type: "domain",
            domainContract: defaultRegistrar,
            subcollections: [
              {
                name: "season0",
                type: "collection",
                domainContract: defaultRegistrar,
                nftContract: defaultRegistrar,
              },
              {
                name: "season1",
                type: "collection",
                domainContract: defaultRegistrar,
                nftContract: defaultRegistrar,
              },
              {
                name: "season2",
                type: "collection",
                domainContract: defaultRegistrar,
                nftContract: "0x35D2F3CDAf5e2DeA9e6Ae3553A4CaACBA860A395",
              },
            ],
          },
        ],
      },
      {
        name: "craft",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "genesis",
            type: "collection",
            domainContract: defaultRegistrar,
            nftContract: defaultRegistrar,
          },
        ],
      },
      {
        name: "cribs",
        type: "domain",
        domainContract: defaultRegistrar,
        subcollections: [
          {
            name: "wiami",
            type: "domain",
            domainContract: defaultRegistrar,
            subcollections: [
              {
                name: "southbeach",
                type: "domain",
                domainContract: defaultRegistrar,
                subcollections: [
                  {
                    name: "qube",
                    type: "collection",
                    domainContract: defaultRegistrar,
                    nftContract: defaultRegistrar,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  goerli: {
    zNS: {
      registrar: "0x009A11617dF427319210e842D6B202f3831e0116",
      domainPurchaser: "0x19f127f0a5ACCF0E6E2DdcE63085750a74EBc44A",
      subregistrarBeacon: "0x9e20B753d87c4B6632394566EcbE7453B5404871",
      znsHub: "0xce1fE2DA169C313Eb00a2bad25103D2B9617b5e1",
      basicController: "0xd23299F8f0BF17d2d037a12985F83c29A630E6F8",
      zDAO: "0x4d681D8245e956E1cb295Abe870DF6736EA5F70e",
    },
    zAuction: {
      zAuction: "0x78764080e4Fb36CB24487d3Ca8e3aa92cD7C58fc",
      legacyZAuction: "0xeABfD3B80A38a95006899Ddf7e8d5F89A5dE6dF3",
    },
    tokens: {
      wildToken: "0x0e46c45f8aca3f89Ad06F4a20E2BED1A12e4658C",
      lootToken: "0x196bc789E03761904E3d7266fa57f2001592D25A",
      zeroToken: "0x3Fa5ae3F31D38bCc2cf1dA2394c938dA8a1C9f69",
    },
    staking: {
      stakeFactory: "0xAeEaC5F790dD98FD7166bBD50d9938Bf542AFeEf",
      lpToken: "0x196bc789E03761904E3d7266fa57f2001592D25A",
      wildStakingPool: "0x376030f58c76ECC288a4fce8F88273905544bC07",
      lpStakingPool: "0xCa0F071fcf5b36436F75E422b5Bd23666015b9f9",
    },
    sales: [],
  },
};