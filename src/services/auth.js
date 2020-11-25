export const isAuthenticated = () => {

  const login = JSON.parse(localStorage.getItem("userShop"));

  if (login) {
    if (login.user) {
      if (login.user.email) {
        return true;
      }
    }
  }

  return false;
};