import axios from "axios";
import general from "./general";

const URL = general.auth;

const login = async (identifier, password) => {
    const response = await axios
        .post(URL, {
            identifier,
            password,
        });

    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if (user != null) {
        return true
    } else {
        return false
    }
};

const authService = {
    login,
    logout,
    getCurrentUser,
};

export default authService;