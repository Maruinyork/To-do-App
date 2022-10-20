//El icono que tiene el tilde vamos a convertirlo en una funcion, asi cuando esta la tarea realizada cambia de color. 
const checkComplete =(id)=>{
    const i = document.createElement('i') //creo el elemento i que es el de los iconos, y le voy a ir agregando sus partes
    i.classList.add('far','fa-check-square','icon' );
    //Al hacer click se considera la tarea completa
    i.addEventListener('click', (event)=>completeTask(event,id));
    return i;
  };
  
  const completeTask = (event, id)=>{
    //obtendremos la clase para modificarla
    const element = event.target
    element.classList.toggle('fas');
    //le agregamos la clase que convierte el elemento en azul
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex((item) => item.id === id);
    tasks[index]['complete']=!tasks[index]['complete']; //negamos el valor, si complete es false, al clickear es true
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  export default checkComplete