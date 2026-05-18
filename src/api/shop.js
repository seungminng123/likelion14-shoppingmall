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

export const createShop = async (type = "clothes", data) => {
    const res = await api.post(`/${type}`, data);
    return res.data;
}
export const deleteShop = async (type = "clothes", id) => {
    const res = await api.delete(`/${type}/${id}`);
    return res.data;
}
export const updateShop = async (type = "clothes", id, data) => {
    const res = await api.put(`/${type}/${id}`, data);
    return res.data;
}
export const patchShop = async (type = "clothes", id, data) => {
    const res = await api.patch(`/${type}/${id}`, data);
    return res.data;
}
