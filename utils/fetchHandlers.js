import axios from "axios";

export const getHandler = async (url) => {
    const response = await axios.get(url);
    console.log(response);
    return response?.data?.result;
};

export const postHandler = async ({ url, body }) => {
    const response = await axios.post(url, body);
    console.log(response);
    return response.data.result;
};
