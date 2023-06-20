export interface Networks {
  [networkName: string]: {
    zNS: {
      [projects: string]: string;
    },
    zAuction: {
      [projects: string]: string;
    },
    tokens: {
      [projects: string]: string;
    },
    staking: {
      [projects: string]: string;
    },
    sales: {
      [projects: string]: string | {
        [collection: string]: string | {
          [subcollection: string]: string | {
            [subcollection: string]: string
          }
        }
      }
    }
  }
}
