/* eslint-disable linebreak-style */
export default class Popover {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
      <div class="form">
        <form action="submit">
          <input type="text">
          <button>Click to Popover</button>
        </form>
      </div>
      <div class="popover hidden">
        <h3>Popover</h3>
        <div></div>
      </div>`;
  }

  static get inputSelector() {
    return 'input';
  }

  static get popoverSelector() {
    return '.popover';
  }

  static get buttonSelector() {
    return 'button';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    const input = this.parentEl.querySelector(this.constructor.inputSelector);
    button.addEventListener('click', (e) => this.onButton(e));
    input.addEventListener('click', (e) => this.onInput(e));
  }

  onButton(evt) {
    evt.preventDefault();
    const popover = this.parentEl.querySelector(this.constructor.popoverSelector);
    popover.classList.remove('hidden');
  }

  onInput(evt) {
    evt.preventDefault();
    const popover = this.parentEl.querySelector(this.constructor.popoverSelector);
    popover.classList.remove('hidden');
  }
}
