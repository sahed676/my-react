const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();


function Card (props) {
  const {todoTitle, todoDesc} = props;
  return  <div className='card' >
  <h3 className ='card-title' >  { todoTitle }</h3>
  <p className='card-middle' >This is my first react practice project</p>
  <p className='card-footer' >{ todoDesc }</p>
  <p>{dateName +"-" + monthName + "-" +  + yearName }</p>
  </div>
}


export default Card;