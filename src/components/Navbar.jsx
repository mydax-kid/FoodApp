import {NavLink} from 'react-router-dom'
import { BsHeart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({cartItemNum, wishItemNum}) => {
  const [showBurger, setShowBurger] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  
  const path = useLocation().pathname ; 
  const addActive = (route) => path === route ? "active" : "" ;

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      setShowBurger(true)
    } else {
      setShowBurger(false)
      setShowMenu(false)
    }
  })

  useEffect(() => {
    if (showMenu) {
      document.body.style.position = 'fixed';
      document.body.style.height = '100vh';
      document.body.style.width = '100vw';
    } else {
      document.body.style.position = 'static';
    }
  }, [showMenu])

  useEffect(() => {
    setShowMenu(false);
  }, [path])
  
  return(
   <header>
     <NavLink to='/'>
       <div className="logo">Food<span>Hub</span></div>
     </NavLink>
     <nav>
      <ul className= {showBurger ? 'menu-off' : 'nav-links'}>
        <NavLink to= '/' className= { addActive('/')} ><li>Home</li></NavLink>
        <NavLink to= '/menu' className= { addActive('/menu') }><li>Menu</li></NavLink>
        <NavLink to= '/about' className= { addActive('/about') } ><li>About</li></NavLink>
        <NavLink to= '/shop' className={ addActive('/shop')} ><li>Shop</li></NavLink>
        <NavLink to= '/contact' className={ addActive('/contact')} ><li>Contact</li></NavLink>
      </ul>
     </nav>
     
     <div className= 'icon-links' >
       <NavLink to= '/wishlist' className={ `${addActive('/wishlist')} icon-num-wrap`}>
         <BsHeart/>
         <span class= 'cart-num'>{wishItemNum}</span>
       </NavLink>
       <NavLink to= '/cart' className={ `${addActive('/cart')} icon-num-wrap`}>
         <FaShoppingCart/>
         <span class= 'cart-num'>{cartItemNum}</span>
       </NavLink>
     </div>

     { showBurger && <GiHamburgerMenu className= 'burger' onClick= {() => setShowMenu(!showMenu)}/> }

     <div className= {showMenu ? 'dropdown' : 'menu-off'}>
       <nav>
        <ul>
          <NavLink to= '/' className= { addActive('/')} ><li>Home</li></NavLink>
          <NavLink to= '/menu' className= { addActive('/menu') }><li>Menu</li></NavLink>
          <NavLink to= '/about' className= { addActive('/about') } ><li>About</li></NavLink>
          <NavLink to= '/shop' className={ addActive('/shop')} ><li>Shop</li></NavLink>
          <NavLink to= '/contact' className={ addActive('/contact')} ><li>Contact</li></NavLink>
          <NavLink to= '/wishlist' className={ addActive('/contact')} ><li>WishList</li></NavLink>
          <NavLink to= '/cart' className={ addActive('/contact')} ><li>Cart</li></NavLink>
        </ul>
      </nav>
     </div>
  
   </header>
  )
}

export default Navbar;