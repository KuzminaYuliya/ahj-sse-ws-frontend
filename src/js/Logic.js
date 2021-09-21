/* eslint-disable linebreak-style */
/* eslint-disable no-console */
export default class Logic {
  constructor(gui) {
    this.gui = gui;
    // this.url = 'ws://localhost:7070/ws';
    this.url = 'wss://ahj-sse-ws-bk.herokuapp.com/';
    this.user = null;
  }

  init() {
    this.wsConnect();
    this.gui.chatForm.addEventListener('submit', (e) => this.sendMessage(e));
    this.gui.formLogin.addEventListener('submit', (e) => this.login(e));
  }

  login(e) {
    e.preventDefault();
    this.user = this.gui.loginInput.value;
    this.ws.send(JSON.stringify({ login: this.gui.loginInput.value }));
    this.gui.loginInput.value = '';
    this.getMessages();
  }

  sendMessage(e) {
    e.preventDefault();
    this.ws.send(JSON.stringify({ message: this.gui.chatInput.value }));
    this.gui.chatInput.value = '';
  }

  getMessages() {
    this.ws.send(JSON.stringify({ messagesList: true }));
  }

  wsConnect() {
    this.ws = new WebSocket(this.url);
    const { ws } = this;
    ws.binaryType = 'blob';

    window.addEventListener('beforeunload', () => {
      this.ws.send(JSON.stringify({ login: this.user }));
    });

    ws.addEventListener('open', () => {
      console.log('connected');
    });

    ws.addEventListener('close', () => {
      console.log('connection closed');
    });

    ws.addEventListener('message', (e) => {
      const response = JSON.parse(e.data);
      if (!response) this.gui.changeName();
      else if (!response[0].msg) {
        this.gui.usersListContainer.classList.remove('hidden');
        this.gui.chat.classList.remove('hidden');
        this.gui.usersList.innerHTML = '';
        response.forEach((user) => {
          this.gui.drawUsersList(user.name);
        });
        this.gui.nameIsOk();
      } else if (response[0].msg) {
        this.gui.chatConversation.innerHTML = '';
        response.forEach((msg) => {
          this.gui.drawMessagesList(msg.nickname, msg.msg, msg.date, this.user);
        });
      }
      console.log('response', response);
    });
  }
}
