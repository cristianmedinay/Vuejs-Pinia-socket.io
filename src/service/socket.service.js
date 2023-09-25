import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('ws://localhost:4000');
    this.socket.emit('howdy', 'Hello there from Vue.');

    return this.socket;
  }
}

export default new SocketioService();