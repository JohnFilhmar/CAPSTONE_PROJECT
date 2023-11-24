import axios from "axios";
import { useState } from "react";
import { useEncryptToken } from "./useHashToken";

const useLoginUser = () => {
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");

    const loginUser = async (email, password) => {
        try {
            const userCredentials = {
                email: email,
                password: password,
            };

            const response = await axios.postForm("api/login", userCredentials);
            
            const responseToken = response.data.token;
            const responseMessage = response.data.message;
            const responseError = response.data.error;

            if(response.data && responseToken) {
                setToken(responseToken);
            }
            if(response.data && responseMessage) {
                setMessage(responseMessage);
            }
            if(response.data && responseError) {
                // setError(responseError);
                setMessage(responseError);
            }
            
        } catch(error) {
            setMessage(error.response.data.error);
        }
    };

    useEncryptToken(token);

    return { loginUser, message };
};

export default useLoginUser;
