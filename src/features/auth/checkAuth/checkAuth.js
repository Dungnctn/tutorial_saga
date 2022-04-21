export const isAuthenticate = () => {
    const a = JSON.parse(localStorage.getItem("access_token"))
    console.log('a', a);
    if(localStorage.getItem("access_token")){
        return JSON.parse(localStorage.getItem('access_token'))
    }else{
        return false
    }
}