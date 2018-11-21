import axios from "axios";
const methods = [
    "get",
    "head",
    "post",
    "put",
    "del",
    "options",
    "patch",
];
const baseUrl = "";
export default class Api {
    constructor(opts) {
        this.opts = opts || {
            headers: {},
        };
        methods.forEach(method => {
            this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
                const url = baseUrl + path;
                console.log(url,"url")
                return axios({
                    method,
                    url,
                    params,
                    data,
                }).then(onfulfilled => {
                    console.log(onfulfilled, "success")
                    // return {
                    //     data: onfulfilled.data,
                    //     status: onfulfilled.status,
                    // };
                    resolve({
                        data: onfulfilled.data,
                        status: onfulfilled.status,
                    });
                }).catch(error => {
                    reject({
                        status: error.response&&error.response.status,
                        error
                    });
                });
            });
        });

    }
}
