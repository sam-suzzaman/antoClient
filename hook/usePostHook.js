import { useState } from "react";

const usePostHook = (url, type) => {
    const [state, setState] = useState({
        isLoading: false,
        data: null,
        isError: false,
        error: null,
    });

    const postData = async (postData) => {
        setState({ ...state, isLoading: true, isError: false, error: null });

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": type || "application/json",
                },
                body: JSON.stringify(postData),
            });
            const result = await response.json();
            console.log(result);

            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                );
            }
            setState({
                isLoading: false,
                data: result,
                isError: false,
                error: null,
            });
        } catch (err) {
            setState({
                isLoading: false,
                data: null,
                isError: true,
                error: err.message,
            });
        }
    };

    return { ...state, postData }; 
};

export default usePostHook;
