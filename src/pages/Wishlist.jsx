import './Wishlist.css'
import { HiStar } from "react-icons/hi"; 

const Wishlist = ({wishList, handleCart, removeWish}) => {
  
  if (wishList.length == 0) {
    return <h1 className= 'error-wish'>No Items On Your <span>WishList</span></h1>
  }
  
  return(
      <>
        <section className= 'hero-wish'>
            <img src='https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </section>
    
        <section className= 'list-wrap-flex'>
          
          {
            wishList.map(item => {
              return(
              <div className= 'card-flex' key= {item.id}>
                <div className= 'img-wrap'>
                  <img  src= {item.img} alt= ''/>
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <h3>${item.price}.00</h3>
                  <p className= 'rating'>
                   {            
                     Array.apply(null, {length: item.rating}).map(item => {
                        return <HiStar/>
                      })
                    }
                  </p>
                  <button className= 'cart' onClick = {() => handleCart(item.id, true)} >Move to Cart</button>
                  <br></br>
                  <button className= 'remove' onClick= {() => removeWish(item.id)} >Remove</button>
                </div>
              </div> 
              )
            })
          }
          
        </section>
  </>
  )
}

export default Wishlist;


// <button className= 'cart'><RiShoppingCartLine/> Move to Cart</button>
// <button className= 'remove'><MdOutlineDelete/> Remove</button>
// import { MdOutlineDelete } from "react-icons/md"; 
// import { RiShoppingCartLine } from "react-icons/ri";