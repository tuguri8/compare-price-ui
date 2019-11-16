import axios from 'axios';

const get = (path, params) => {
    return axios.get("http://52.78.138.174:8080" + path, {params: params});
};

export const api = {
    getCompare: (email) => {
        return get('/api/list', {
            email: email,
        })
    },
};
