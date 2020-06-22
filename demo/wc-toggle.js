((window) => {
  const ELEMENT_TAG = 'wc-toggle'

  // <wc-toggle 
  //   on-icon="microphone"
  //   on-color="red"
  //   off-icon="microphone-slash"
  //   off-color="grey"
  // ></wc-toggle>

  class Toggle extends HTMLElement {  
    connectedCallback () {
      this.state = this.getAttribute('state') || 'on';
      this.render()
    }

    render () {
      if (!this._dom_attached) {
        this.btn = document.createElement('button');
        this.btn.className = "neu";
        this.btn.style.display = "inline-flex";
        this.btn.style.justifyContent="center";
        this.btn.style.width="40px";
        this.iconElement = document.createElement('i');
        this.iconElement.style.fontSize="40px";
        this.btn.appendChild(this.iconElement);
        this.btn.onclick = () => this.toggle();
        this.appendChild(this.btn)
        this._dom_attached = true;
      }

      this.icon = this.getAttribute(`${this.state}-icon`);
      this.color = this.getAttribute(`${this.state}-color`);
    }

    toggle () {
      if (this.state === 'on') {
        this.state = 'off';
      } else {
        this.state = 'on';
      }
      this.render();
    }

    set color (value) {
      this.iconElement.style.color = value;
    }
    
    set icon (value) {
      this.iconElement.className = `fa fa-${value}`; 
    }
  }

  if ('customElements' in window) {
    customElements.define(ELEMENT_TAG, Toggle);
  } else {
    document.registerElement(ELEMENT_TAG, {prototype: Object.create(Toggle.prototype)});
  }

})(window)