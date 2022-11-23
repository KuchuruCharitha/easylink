import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
import TransactionsCard from "./TransactionsCard";


const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            LEDGER
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2 h-screen">
            Connect your account to see the LEDGER          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} colour={false}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
;
