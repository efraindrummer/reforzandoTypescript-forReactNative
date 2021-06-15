import axios from "axios";

export const resResApi = axios.create({
    baseURL: 'https://reqres.in/api'
});