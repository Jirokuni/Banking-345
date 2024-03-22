import React, { useState, useEffect } from "react";

function Send() {
    const local = JSON.parse(localStorage.getItem('allAccounts')) || [];

    const [sendID, setSendID] = useState('');
    const [receiveID, setReceiveID] = useState('');
    const [balanceInput, setBalanceInput] = useState(0);
    const [retrievedUsers, setRetrievedUsers] = useState(local);


// useEffect(() => {
//     console.log(retrievedUsers);
// }, [retrievedUsers])

  const sendIDInput = (e) => {
    setSendID(e.target.value);
  }
  const handleAmountInput = (e) => {
    setBalanceInput(e.target.value);
  }
  const receiveIDInput = (e) => {
    setReceiveID(e.target.value);
  }


  const confirmSend = () => {
  
    const userSend = retrievedUsers.find(
      (user) => String(user.id) === String(sendID.trim())
    );
    const userReceive = retrievedUsers.find(
      (user) => String(user.id) === String(receiveID.trim())
    );

    if (Number(balanceInput) <= 0) {
      alert("Balance input must be greater than 0");
      return;
    }

      if (Number(userSend.balance) < Number(balanceInput)) {
        alert("Insufficient balance for the transaction");
        return;
    }

    if (userSend && userReceive) {

      const updatedUsers = retrievedUsers.map((user) => {
        if (String(user.id) === String(sendID).trim()) {
            return { ...user, balance: Number(user.balance) - Number(balanceInput) };
        } else if (String(user.id) === String(receiveID).trim()) {
          return { ...user, balance: Number(user.balance) + Number(balanceInput) };
        } else {
          return user;
        }
      });

      const userStringJSON = JSON.stringify(updatedUsers);
      localStorage.setItem("allAccounts", userStringJSON);
      setRetrievedUsers(updatedUsers);
      setBalanceInput(0);
      setSendID("");
      setReceiveID("");
      console.log(updatedUsers);
    }
  };
  return (
    <>
    <div className="send-box">
      <div className="send-container">
      <h2 className="send-heading">
      P2P Money Transfer
    </h2>
        { (
          <>
            <input
              type="text"
              placeholder="Enter sender id"
              onChange={sendIDInput}
              value={sendID}
            />
            <input
              type="text"
              placeholder="Enter balance"
              onChange={handleAmountInput}
              value={balanceInput}
            />
            <input
              type="text"
              placeholder="Enter receiver id"
              onChange={receiveIDInput}
              value={receiveID}
            />
            <button
              onClick={() =>
                confirmSend()
              }
            >
              Confirm
            </button>
          </>
        ) }
      </div>
      </div>
      </>
  );
}

export default Send
