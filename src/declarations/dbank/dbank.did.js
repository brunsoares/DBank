export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'calculateFees' : IDL.Func([], [], ['oneway']),
    'checkCurrentValueWallet' : IDL.Func([], [IDL.Float64], ['query']),
    'decrementValue' : IDL.Func([IDL.Float64], [], ['oneway']),
    'incrementValue' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
