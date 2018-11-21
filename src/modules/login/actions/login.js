import api from "../../../utils/api/index";

export function login(userName,passWord){
    return {
        type:"LOGIN",
        payload:{
            promise:api.post("/dev/api/login",{
                data:{
                    userName,
                    passWord
                }
            })
        }
    }
}