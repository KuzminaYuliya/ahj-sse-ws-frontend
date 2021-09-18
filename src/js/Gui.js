/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
export default class Gui {
  constructor() {
    this.chat = document.querySelector('.chat');
    this.chatForm = document.querySelector('.chat form');
    this.chatConversation = document.querySelector('.conversations');
    this.chatInput = this.chatForm.querySelector('input');

    this.loginDiv = document.querySelector('.login');
    this.formLogin = document.querySelector('.login form');
    this.loginInput = this.formLogin.querySelector('input');
    this.loginLabel = this.formLogin.querySelector('label');

    this.usersListContainer = document.querySelector('.users_list');
    this.usersList = document.querySelector('.users_list ul');

    this.widget = document.querySelector('.widget');
  }

  drawUsersList(user) {
    this.usersList.innerHTML += `
      <li>${user}</li>
    `;
  }

  changeName() {
    this.loginLabel.style.color = 'red';
    this.loginInput.classList.add('invalid');
    this.loginLabel.innerHTML = 'Select another name';
  }

  nameIsOk() {
    this.loginDiv.classList.add('hidden');
    this.loginLabel.style.color = 'ingerit';
    this.loginInput.classList.remove('invalid');
    this.loginLabel.innerHTML = 'Enter your name';
  }

  drawMessagesList(nick, msg, date, user) {
    let classname = '';
    let login = nick;
    if (nick === user) {
      classname = ' you';
      login = 'You';
    }
    this.chatConversation.innerHTML += `
    <div class="message${classname}">
    <span>${login}, ${date}</span>
    ${msg}
    </div>
    `;
  }
}
