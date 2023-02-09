import './Menu.css'
import {menuItems} from './data.js'
import Menucard from '../components/Menucard'

const Menu = () => {

  return (
    <>
      <section className= 'hero-menu'>
        <img src='https://images.pexels.com/photos/12061486/pexels-photo-12061486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </section>

      <section className= 'starter flex pad'>
        <div className= 'img-wrap'>
          <img src='https://images.pexels.com/photos/11875415/pexels-photo-11875415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </div>
        <div>
          <h1>Starter Menu</h1>
          <div className= 'menu-wrap'>
            {
            menuItems.map(item => {
              if( item.type === 'starter'){
                return <Menucard {...item} /> 
              }
            })
            }
          </div>
        </div>
      </section>

      <section className= 'main flex pad'>
        <div className= 'img-wrap'>
          <img src='https://images.pexels.com/photos/9033747/pexels-photo-9033747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </div>
        <div>
          <h1>Main Menu</h1>
          <div className= 'menu-wrap'>
            {
            menuItems.map(item => {
              if( item.type === 'main'){
                return <Menucard {...item} /> 
              }
            })
            }
          </div>
        </div>
      </section>

       <section className= 'hero-menu'>
        <img src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </section>

      <section className= 'dessert flex pad'>
        <div className= 'img-wrap'>
          <img src='https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </div>
        <div>
          <h1>Dessert Menu</h1>
          <div className= 'menu-wrap'>
            {
            menuItems.map(item => {
              if( item.type === 'dessert'){
                return <Menucard {...item} /> 
              }
            })
            }
          </div>
        </div>
      </section>

      <section className= 'drinks flex pad'>
        <div className= 'img-wrap'>
          <img src='https://images.pexels.com/photos/5817624/pexels-photo-5817624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </div>
        <div>
          <h1>Drinks Menu</h1>
          <div className= 'menu-wrap'>
            {
            menuItems.map(item => {
              if( item.type === 'drinks'){
                return <Menucard {...item} /> 
              }
            })
            }
          </div>
        </div>
      </section>

       
    </>
  )
}

export default Menu;