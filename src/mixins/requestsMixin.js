const APIURL = 'http://laravel.crud.nctu.me/api';
const axios = require('axios');
export const requestsMixin = {
    methods: {
        getContacts() {
            return axios.get(`${APIURL}`);
        },
        addContact(data) {
            return axios.post(`${APIURL}/new`, data);
        },
        editContact(data) {
            return axios.put(`${APIURL}/edit/${data.id}`, data);
        },
        deleteContact(id) {
            return axios.delete(`${APIURL}/delete/${id}`);
        },
    },
};
