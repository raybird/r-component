class RButton extends HTMLElement {
    constructor() {
      super();
  
      // 建立 Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // 建立樣式
      const style = document.createElement('style');
      style.textContent = `
        button {
          background-color: blue;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          background-color: darkblue;
        }
      `;
  
      // 建立按鈕元素
      const button = document.createElement('button');
      button.textContent = this.getAttribute('label') || 'Click Me';
  
      // 添加到 Shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(button);
    }
  }
  
  // 定義 Web Component
  customElements.define('r-button', RButton);