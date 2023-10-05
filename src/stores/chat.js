import { defineStore } from "pinia";

export const useClientStore  = defineStore("client",{
    state:()=>({
        clients: [],
        clientSelected: null
    }),
    //peticiones HTTP
    actions:{
          SOCKET_list(payload) {
            this.clients = payload;
          },
          SOCKET_message(payload = { id, message }) {
            const client = this.clients.find((c) => c.id === payload.id);
            if (client) {
              client.messages.push(payload.message);
            }
          }, SOCKET_client_status(payload = { id, status}) {
            const client = this.clients.find((c) => c.id === payload.id);
            if (client) {
              client.connected = payload.status;
            }
          },
          setClientSelected(payload) {
            this.clientSelected = payload;
          },
    },
    mutations:{
      
    }
})