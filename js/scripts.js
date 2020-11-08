let tareas = [
  { 
    "id": 1, "tipoTarea": "Backlog", "texto": "Company redesign", "mensajes": 2, "adjuntos": 4  },
  { 
    "id": 2, "tipoTarea": "InProgress", "texto": "Cards print", "mensajes": 5, "adjuntos": 2 },
  {
    "id": 3, "tipoTarea": "Review", "texto": "Logo design", "mensajes": 44, "adjuntos": 2 },
  {
    "id": 4, "tipoTarea": "Review", "texto": "Sign documents", "mensajes": 11, "adjuntos": 0 },
  {
    "id": 5, "tipoTarea": "Completed", "texto": "Remove header", "mensajes": 11, "adjuntos": 2 },
  {
    "id": 6, "tipoTarea": "Backlog", "texto": "Lunch stakeholders", "mensajes": 0, "adjuntos": 6 },
  {
    "id": 7, "tipoTarea": "Completed", "texto": "Select pictures", "mensajes": 1, "adjuntos": 4 },
  {
    "id": 8, "tipoTarea": "Backlog", "texto": "Send report", "mensajes": 1, "adjuntos": 7 }
];

tareas.forEach(function (item) {
       
  let div = document.createElement('div');
  div.setAttribute('id', item.id);
  div.setAttribute('class', 'tarea');
    
  div.innerHTML = 
    '<button class="priority">Priority</button>' 
    + '<div>'
    + '<p>' + item.texto + '<p>'
    + '<div class="icons">'
      + '<div>'
        + '<i class="fas fa-comment-alt"></i>'
        + item.mensajes
      + '</div>'
      + '<div>'
        + '<i class="fas fa-paperclip"></i>'
        + item.adjuntos
      + '</div>'
      + '<div>'
        + '<i class="fa fa-user-circle"></i>'
      + '</div>' 
    + '</div>'
    + '</div>'  

  if(item.tipoTarea === 'Backlog'){ 
     document.getElementById("tareasBacklog").appendChild(div);
  }
  if(item.tipoTarea === 'InProgress'){  
     document.getElementById("tareasInProgress").appendChild(div);
  }
  if(item.tipoTarea === 'Review'){  
     document.getElementById("tareasReview").appendChild(div);
  }
  if(item.tipoTarea === 'Completed'){ 
     document.getElementById("tareasCompleted").appendChild(div);
  }
});  

clonarUltimaTarea =(tipoTarea)=> {
  console.log(tipoTarea)
  let item = tipoTarea.lastChild;
  let clone = item.cloneNode(true);
  tipoTarea.appendChild(clone);
  console.log( tipoTarea.appendChild(clone) );
}

