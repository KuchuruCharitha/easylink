import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionsCard from "./TransactionsCard";

const Profile = () => {
    const {usertransactions,currentAccount} = useContext(TransactionContext);
    return (
      <>

        <div>
            <div className="text-center pt-7">
                <h1 className="text-5xl  rounded-full p-4 text-blue-900 border-4  border-blue-700 inline-block text-center ">User Transactions...</h1>

            </div>
            <div className="flex flex-wrap justify-center items-center mt-10">
          {[...usertransactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} colour={true}/>
            ))}
            </div>
        </div>
      
      </>
    );
}

export default Profile;