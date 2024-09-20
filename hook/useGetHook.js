import React, { useEffect, useState } from "react";

const useGetHook = (url) => {
    const [state, setState] = useState({
        isLoading: true,
        data: null,
        isError: false,
        error: null,
    });
    useEffect(() => {
        const fetchData = async (url) => {
            setState({
                isLoading: true,
                data: null,
                isError: false,
                error: null,
            });

            try {
                const response = await fetch(url);
                const res = await response.json();

                if (res.status) {
                    return setState({
                        isLoading: false,
                        data: res.result,
                        isError: false,
                        error: null,
                    });
                }

                setState({
                    isLoading: false,
                    data: null,
                    isError: true,
                    error: res.result,
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

        fetchData(url);
    }, [url]);

    return state;
};

export default useGetHook;
