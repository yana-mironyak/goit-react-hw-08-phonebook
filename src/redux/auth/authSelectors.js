const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.auth.token;
const getUserName = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getToken
};

export default authSelectors;
