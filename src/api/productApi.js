import axiosClient from "./axiosClient"

const productApi = {
    getAll(params) {
        const url = '/products'
        return axiosClient.get(url, { params });
    },

    getById( id ) {
        const url = `/product/${id}`
        return axiosClient.get(url);
    },

    add( data ) {
        const url = `/product`
        return axiosClient.post(url, data)
    },

    update(data) {
        const url = `/product/${data._id}`
        return axiosClient.put(url, data);
    },

    remove( id ) {
        const url = `/products/${id}`
        return axiosClient.delete(url);
    },
}

export default productApi