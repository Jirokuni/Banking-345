export const fetchData = (key) => {
    const allAccounts = JSON.parse(localStorage.getItem("allAccounts")) || [];
    const foundAccount = allAccounts.find(
      (account) => account.firstName === key
    );
    return foundAccount
    }