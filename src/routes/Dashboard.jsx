import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Dashboard() {
  const [allAccounts, setAllAccounts] = useState([]);
  const [accountToDelete, setAccountToDelete] = useState(null);

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem('allAccounts')) || [];
    setAllAccounts(accounts);
  }, []);

  const handleDeleteAccount = (email) => {
    setAccountToDelete(email);
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedAccounts = allAccounts.filter(account => account.email !== accountToDelete);
        const updatedAccountsString = JSON.stringify(updatedAccounts);
        localStorage.setItem('allAccounts', updatedAccountsString);
        setAllAccounts(updatedAccounts);
        setAccountToDelete(null);
        Swal.fire("Saved!", "", "success");
        localStorage.removeItem('defaultLogin');
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }


  return (
    <>
    <div className='dash-box'>
        <div id='head-users'><strong>All Users</strong>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Initial Balance</th>
              <th>Actions</th>
            </tr>
          </thead>  
          <tbody>
            {allAccounts.map((account, index) => (
              <tr key={index}>
                <td>{account.id}</td>
                <td>{account.userName}</td>
                <td>{account.firstName} {account.lastName}</td>
                <td>{account.email}</td>
                <td>{account.balance}</td>
                <td>
                  <button onClick={() => handleDeleteAccount(account.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
    </>
    )}


export default Dashboard