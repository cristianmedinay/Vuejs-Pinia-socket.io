import { defineStore } from "pinia";
import socketService from "../service/socket.service";
export const userChat = defineStore('userChat',{

    state:()=>({
        users:[],
        chat:[],
        username:null,
        exists:false,
        socket:SocketioService.setupSocketConnection()
    }),
    actions:{
        socket_new_message({rootState},message){
            socket.emit('increment', 'Hello there from Vue.');

        }
          
    },
    mutations:{
      
    }

})