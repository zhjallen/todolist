import Api from "./api";
const api = new Api({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Credentials': true,
        // 'entid': window.getCookie('entid') ? window.getCookie('entid') : ''
    },
});
export default api;