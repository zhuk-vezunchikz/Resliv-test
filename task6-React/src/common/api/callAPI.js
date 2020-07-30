import axios from 'axios';

export const callAPI = () => {
    let responsePromise;

    responsePromise = axios.get(
        `https://reqres.in/api/users?per_page=12`,
    )

    return responsePromise.then((res) => {
        return res.data;
    });
};