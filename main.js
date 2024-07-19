import './style.css'
import RequestModel from './RequestModel';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
/* import { setupCounter } from './counter.js' */

document.addEventListener("DOMContentLoaded",showTarggeta);

function showTarggeta(){
  let contenedor=document.querySelector("#contenedor");
  let req=[];
  let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
    fetchRes.then(res =>
      res.json()).then((d) => {
        req.push(new RequestModel(d["userId"],d["id"],d["title"],d["completed"]));
      
        const tarjeta = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText='TARGETA DE REQUEST';
        tarjeta.className = "tarjeta";
        contenedor.appendChild(h3);

          console.log( JSON.stringify(req));
          req.forEach(t=>{
            const idElement = document.createElement("p");
            idElement.innerText="ID: "+t.getId();
            tarjeta.appendChild(idElement);

            const userIdElement = document.createElement("p");
            userIdElement.innerText="USUARIO ID: "+t.getUserId();
            tarjeta.appendChild(userIdElement);
            const TITLEElement = document.createElement("p");
            TITLEElement.innerText="TITULO : "+t.getTitle();
            tarjeta.appendChild(TITLEElement);
            const completadoElement = document.createElement("p");
            completadoElement.innerText="Completado : "+t.getCompleted();
            tarjeta.appendChild(completadoElement);
            console.log(" ID: "+t.getId());
            console.log(" USUARIOM ID: "+t.getUserId());
            console.log(" TITULO: "+t.getTitle());
            console.log(" COMPLETADO: "+t.getCompleted());
          });
          contenedor.appendChild(tarjeta);
      });
  console.log("HOLA....");
}



/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */
