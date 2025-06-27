// LocalStorage helpers
 const getUserDataFromStorage = () =>
    JSON.parse(localStorage.getItem("userData")) || [];

 const setUserDataToStorage = (data) =>
    localStorage.setItem("userData", JSON.stringify(data));

 export { getUserDataFromStorage, setUserDataToStorage };