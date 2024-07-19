import RequestModel from './RequestModel';

export function setupCounter(element) {
  let req=[];
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  let contenedor=document.querySelector("#contenedor");

  let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
    fetchRes.then(res =>
      res.json()).then((d) => {
        req.push(new RequestModel(d["userId"],d["id"],d["title"],d["completed"]));

        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        contenedor.appendChild(tarjeta);

          console.log( JSON.stringify(req));
          req.forEach(t=>{
            console.log(" ID: "+t.getId());
            console.log(" USUARIOM ID: "+t.getUserId());
            console.log(" TITULO: "+t.getTitle());
            console.log(" COMPLETADO: "+t.getCompleted());

          });
      });
}