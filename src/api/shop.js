import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getShops = async (type = "clothes", params = {}) => {
    const res = await api.get(`/${type}`, { params });
    return res.data;
}   

export const getShopDetail = async (type = "clothes", id) => {
    const res = await api.get(`/${type}/${id}`);
    return res.data;
}