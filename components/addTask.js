import { uniqueDates } from '../services/date.js'
import checkComplete from './checkComplete.js'
import deleteIcon from './deleteIcon.js'
import displayTasks from './displayTasks.js'

const addTask = (event) => {
  event.preventDefault()

  const list = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]') //capturo la info
  const calendar = document.querySelector('[data-form-date]') //capturo la info

  const value = input.value //obtengo el valor ingresado por el usuario
  const date = calendar.value //obtengo el valor ingresado por el usuario
  const dateFormat = moment(date).format('DD/MM/YYYY')

  if (value === '' || date === '') {
    return //para que si la persona no escribe nada, no pase nada
  }

  input.value = ''
  calendar.value = ''

  const complete = false
  //la informacion que queremos almacenar en LS es:
  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4()
  };

  list.innerHTML = '' //Esto es para que cuando se cargue una tarea nueva, no se agregue toda una nueva estructura, que se agregue directamente debajo de lo que ya estaba

  // const taskList = [] //vamos a crear un arreglo vacio para ir almacenando las tareas que se guardaran en el LS
  const taskList = JSON.parse(localStorage.getItem('tasks')) || []; //con parse le revertimos el string
  taskList.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskList)); //convertiremos la info en string

  displayTasks();
}

export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement('li');
  task.classList.add('card'); //Le agregamos una clase al li
  const taskContent = document.createElement('div');
  const check = checkComplete(id);

  if(complete){
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }

  const titleTask = document.createElement('span');
  titleTask.classList.add('task'); // Al span le agregamos la tarea
  titleTask.innerText = value; //Le agregamos el tezto que escribio el usuario
  taskContent.appendChild(check)
  taskContent.appendChild(titleTask) //todo esto generado se lo mandamos al taskContent que es el elemento padre

  task.appendChild(taskContent)
  task.appendChild(deleteIcon(id))
  return task
}

export default addTask
