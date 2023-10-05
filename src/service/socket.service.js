import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('ws://localhost:4000');
    

    return this.socket;
  }
}

export default new SocketioService();