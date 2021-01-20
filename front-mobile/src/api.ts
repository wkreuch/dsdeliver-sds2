import axios from "axios"

const API_URL = 'https://ds-delivery-test.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}
