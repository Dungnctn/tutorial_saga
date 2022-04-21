import axiosClient from "./axiosClient"

export const authApi = {
    register(data) {
        console.log('data register',data);
        const url = '/signup'
        return axiosClient.post(url, data)
    },
    getlogin(data){
        const url = '/signin'
        return axiosClient.post(url, data)
    }
    
}

export default authApi