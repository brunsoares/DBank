import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'calculateFees' : () => Promise<undefined>,
  'checkCurrentValueWallet' : () => Promise<number>,
  'decrementValue' : (arg_0: number) => Promise<undefined>,
  'incrementValue' : (arg_0: number) => Promise<undefined>,
}
