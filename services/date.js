export const uniqueDates = (tasks)=>{
const unique = [];

tasks.forEach((task) => {
  if(!unique.includes(task.dateFormat)){ //Si no existe la fecha la agregas, sino no
    unique.push(task.dateFormat)
  }
});
  return unique
};

//Ordenar tareas con sort
export const orderDates = (dates)=>{
  return dates.sort((a,b) =>{
  const firstDate = moment(a, 'DD/MM/YYYY')
  const secondDate = moment(b, 'DD/MM/YYYY')
  return firstDate-secondDate;
  });
}

//Accederemos a cada fecha y las almacenaremos en un nuevo arreglo, asi se muestran por fechas

