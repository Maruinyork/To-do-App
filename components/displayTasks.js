 import { createTask } from "./addTask.js";
 import dateElement from "./dateElement.js";
 import {uniqueDates, orderDates} from "../services/date.js";

 const displayTasks = ()=>{
    const list = document.querySelector('[data-list]') //Seleccionamos la lista
    const tasksList = JSON.parse(localStorage.getItem('tasks'))|| [] //en caso de que no haya tareas será un array vacio
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    
    dates.forEach((date) =>{
        const dateMoment = moment(date, 'DD/MM/YYYY')
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => { //Recorremos el arreglo
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            //si la diferencia entre dateMoment y taskDate es 0 significa que es la misma fecha, que la cree
            if(diff === 0){
              list.appendChild(createTask(task));
            }
        });
    });
};
export default displayTasks;
//Queremos que esta funcion se ejecute cada vez que se cargue la pagina