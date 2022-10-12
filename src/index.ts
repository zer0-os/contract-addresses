import { Networks } from "./types";
export * from "./types";

export const zer0ProtocolAddresses: Networks = {
  mainnet: {
    zNS: {
      registrar: "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D",
      znsHub: "0x3F0d0a0051D1E600B3f6B35a07ae7A64eD1A10Ca",
      basicController: "0xa05Ae774Da859943B7B859cd2A6aD9F5f1651d6a",
      zDAO: "",
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
    sales: {
      wheels: "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D",
      wheels_updated: "0x19a55608f360f6Df69B7932dC2F65EDEFAa88Dc2",
      kicks: "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D",
      kicks_updated: "0x6427CcA6CD4586ec7044Cc138158ba4Eb1633711",
      cribs: "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D",
      crafts: "0x7bA5faff747a3cA7E4ebe65F64e3EDFAEE136846",
      beasts: "0x1A178CFD768F74b3308cbca9998C767F4E5B2CF8",
      airWild: {
        season0: "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D",
        season1: "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D",
        season2: "0x35D2F3CDAf5e2DeA9e6Ae3553A4CaACBA860A395",
      },
    },
  },
  kovan: {
    zNS: {
      registrar: "0xC613fCc3f81cC2888C5Cccc1620212420FFe4931",
      znsHub: "",
      basicController: "0x2EF34C52138781C901Fe9e50B64d80aA9903f730",
      zDao: "",
    },
    zAuction: {
      zAuction: "0x18A804a028aAf1F30082E91d2947734961Dd7f89",
      legacyZauction: "0x18A804a028aAf1F30082E91d2947734961Dd7f89",
    },
    tokens: {
      wildToken: "0x50A0A3E9873D7e7d306299a75Dc05bd3Ab2d251F",
      lootToken: "0xD364C50c33902110230255FE1D730D84FA23e48e",
    },
    staking: {
      stakeFactory: "0x47946797E05A34B47ffE7151D0Fbc15E8297650E",
      lpToken: "0xD364C50c33902110230255FE1D730D84FA23e48e",
      wildStakingPool: "0x4E226a8BbECAa435d2c77D3E4a096F87322Ef1Ae",
      lpStakingPool: "0x9CF0DaD38E4182d944a1A4463c56CFD1e6fa8fE7",
    },
    sales: {},
  },
  rinkeby: {
    zNS: {
      registrar: "0xa4F6C921f914ff7972D7C55c15f015419326e0Ca",
      znsHub: "0x90098737eB7C3e73854daF1Da20dFf90d521929a",
      basicController: "0x1188dD1a0F42BA4a117EF1c09D884f5183D40B28",
      zDao: "0x0FE5c0564E5F2dcE6a2c77A14A32d12461D23E78",
    },
    zAuction: {
      zAuction: "0xb2416Aed6f5439Ffa0eCCAaa2b643f3D9828f86B",
      legacyZAuction: "0x376030f58c76ECC288a4fce8F88273905544bC07",
    },
    tokens: {
      wildToken: "0x3Ae5d499cfb8FB645708CC6DA599C90e64b33A79",
      lootToken: "0x5bAbCA2Af93A9887C86161083b8A90160DA068f2",
    },
    staking: {
      stakeFactory: "0x7bc9fcDD7E156A8d32e8ED602F4e8F06561f4570",
      lpToken: "0x123c1B5A87E4E11663F2604f3EbCAf4ba86e25E1",
      wildStakingPool: "0x8a2Bc679FA92989ab6ef037892a994cD8E949545",
      lpStakingPool: "0x77f854A1AF7f26bbF6626AD75DEC6Eb2D55BA75D",
    },
    sales: {},
  },
  goerli: {
    zNS: {
      registrar: "0x009A11617dF427319210e842D6B202f3831e0116",
      znsHub: "0xce1fE2DA169C313Eb00a2bad25103D2B9617b5e1",
      basicController: "0xd23299F8f0BF17d2d037a12985F83c29A630E6F8",
      zDAO: "0x4d681D8245e956E1cb295Abe870DF6736EA5F70e",
    },
    zAuction: {
      zAuction: "0xdF0f9F007A38aD25E0c02959374f38719Af5fCf8",
      legacyZAuction: "",
    },
    tokens: {
      wildToken: "0x0e46c45f8aca3f89Ad06F4a20E2BED1A12e4658C",
      lootToken: "0x196bc789E03761904E3d7266fa57f2001592D25A",
      zeroToken: "",
    },
    staking: {
      stakeFactory: "0xAeEaC5F790dD98FD7166bBD50d9938Bf542AFeEf",
      lpToken: "0x196bc789E03761904E3d7266fa57f2001592D25A",
      wildStakingPool: "0x376030f58c76ECC288a4fce8F88273905544bC07",
      lpStakingPool: "0xCa0F071fcf5b36436F75E422b5Bd23666015b9f9",
    },
    sales: {
    },
  },
};
