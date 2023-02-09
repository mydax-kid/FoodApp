import './Menucard.css'

const Menucard = ({id,name,description,type,calories,price}) => {
  return(
    <div className= 'card'>
      <div className= 'flex'>
        <h3>{name}</h3>
        <h2>{price}$</h2>
      </div>
      <p><i>{description}</i></p>
      <p>{calories} CAL</p>
    </div>
  )
}

export default Menucard;