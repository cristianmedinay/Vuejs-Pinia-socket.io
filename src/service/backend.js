

import axios from "axios";
/* const storage = new Storage(); */
const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },



    postLogin(email, password) {
        const url = "http://localhost:3000/signin";
        const data = {
            "email": email,
            "password": password,
            /* "version": version */
        }
        return axios.post(url, data)
        .then(res => {
        localStorage.setItem("myCat",res.data.status);
       /*  storage.set("myCat",res.data.status); */
        return res.data
      })
      ;
    }

    
}

export default ApiService