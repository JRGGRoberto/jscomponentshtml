class TituloDinamico extends HTMLElement {
  constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open"});
    
    // base do componente
    const componenteRoot = document.createElement("h1");
    componenteRoot.textContent = this.getAttribute("titulo");

    //estilizar o componente
    const style = document.createElement("style");
    style.textContent = `
    h1{
      color: blue;
    }
    `;

    //enviar para a shadow
    shadow.appendChild(componenteRoot);
    shadow.appendChild(style);
  }
}
// é necessário que o tagname tenha um hifem "-"no nome
customElements.define("titulo-dinamico", TituloDinamico);