import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Menu from './pages/Menu'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import {shopItems} from './pages/data.js'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState, useEffect } from 'react'

export default function App() {

  const [shopList, setShopList] = useState(shopItems)
  const [cartItemNum, setCartItemNum] = useState(0)
  const [wishItemNum, setWishItemNum] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  
  const [cart, setCart] = useState(() => {
      // getting stored value from l.storage
    const saved = localStorage.getItem('cart');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })
  
  const [wishList, setWishList] = useState(() => {
      // getting stored value form l.storage
    const saved = localStorage.getItem('wishList');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })

  useEffect(() => {
  localStorage.setItem('wishList', JSON.stringify(wishList));
  localStorage.setItem('cart', JSON.stringify(cart));
  }, [wishList, cart]);

  useEffect(() => {
    setWishItemNum(wishList.length)
    setCartItemNum(cart.length)
    getCartTotal()
  }, [cart, wishList])

  //CALCULATE CART TOTAL
  const getCartTotal = () => {
    let total = 0;
    cart.map(item => {
      total = total + item.price * item.quantity
    })
    setCartTotal(total) ;
  }

  //CHECK IF CART/WISHLIST ITEM EXISTS
  const checkItem = (id, arr) => {
    let res= null;
    arr.map(item => {
      if (item.id === id) {
        res = true
      } 
      else {
        res = false;
      }
    }) 
    return res;
  }
  
   //ADD ITEMS TO CART
  const handleCart = (id, value= false) => {
    value ? removeWish(id) : null;
    
    let alreadyExists = checkItem(id, cart)

    if (alreadyExists) {
      alert('item already in your cart')
    }
    else {
      let newList = shopList.filter(item => {
        return item.id == id;
      })  
      
      if (cart.length == 0) {
        setCart([...newList])
      } else {
        setCart([...cart, ...newList])
      }
      alert('ITEM ADDED TO CART')
    }    
  }

  //ADD ITEMS TO WISHLIST
  const handleWishList = (id) => {
    let alreadyExists = checkItem(id, wishList)

    if (alreadyExists) {
      alert('item already in your cart')
    }
    else {
      let newList = shopList.filter(item => {
        return item.id == id;
      })  
      
      if (wishList.length == 0) {
        setWishList([...newList])
      } else {
        setWishList([...wishList, ...newList])
      }
      alert('ITEM ADDED TO WISHLIST')
    }    
  }

  //REMOVE WISHLIST ITEM
  const removeWish = (id) => {
    let newList = wishList.filter( item => {
      return item.id !== id
    })
    setWishList([...newList])
  }

  //INCREMENT
  const increment = (id) => {
    let newList = cart.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1}
      } else {
        return item
      }
    })
    setCart([...newList])
  }

  //DECREMENT
  const decrement = (id) => {
    let newList = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1}
      } else {
        return item
      }
    })
    setCart([...newList])
  }

  //REMOVE CART ITEM
  const removeCartItem = (id) => {
    let newList = cart.filter(item => {
      return item.id !== id
    })
    setCart([...newList])
  }

  
  return (
    <Router>
    <main>
      <Navbar cartItemNum= {cartItemNum} wishItemNum= {wishItemNum} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/menu' element= {<Menu/>} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/cart' element= {<Cart 
                                        cart= {cart}
                                        increment= {increment}
                                        decrement= {decrement} 
                                        removeCartItem= {removeCartItem} 
                                        cartTotal= {cartTotal} />} />
        <Route path='/shop' element= {<Shop 
                                        shopList= {shopList} 
                                        setShopList= {setShopList}
                                        handleCart= {handleCart}
                                        handleWishList= {handleWishList} />} />        
        <Route path='/wishlist' element= {<Wishlist 
                                           wishList= {wishList} 
                                           removeWish= {removeWish} 
                                           handleCart = {handleCart} />} /> 
      </Routes>
      <Footer/>
    </main>
    </Router>
  ) 
}

//Also getting stored value, method2
  // useEffect(() => {
  // const cart = JSON.parse(localStorage.getItem('cart'));
  // cart ? setCart(cart) : setCart([]);
  // }, []);

