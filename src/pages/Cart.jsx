import './Cart.css'
import { HiStar } from "react-icons/hi"; 

const Cart = ({cart, decrement, increment, removeCartItem, cartTotal}) => {

  if (cart.length === 0) {
    return <div className= 'nothing'>No Items In Your <span>Cart</span></div>
  }

  return(
    <>
      <section className= 'hero-cart'>
            <img src='https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </section>

      <section className= 'cart-wrap'>
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          
          {
            cart.map(item => {
              return(
                <tr key= {item.id}>
                  <td>
                    <div className= 'shop-card'>
                      <div className= 'card-img-wrap'>
                        <img src= {item.img} alt= '' />                       
                      </div>
                      <h1>{item.name}</h1>
                      <p className= 'rating'>
                       {            
                         Array.apply(null, {length: item.rating}).map(items => {
                            return <HiStar/>
                          })
                        }
                      </p>                      
                    </div>
                  </td>
                  <td>${item.price}.00</td>
                  <td>
                    <div className= 'price-btns'>
                      <button onClick= {() => decrement(item.id)} >-</button>
                      <span>{item.quantity}</span>
                      <button onClick= {() => increment(item.id)} >+</button>
                    </div>
                  </td>
                  <td>${ item.price * item.quantity }.00</td>
                  <td>
                    <div className= 'price-btns btn'>
                      <button onClick= {() => removeCartItem(item.id)}>remove</button>           
                    </div>
                  </td>
                </tr>
              )
            })
          }  
        </table>
        <div className= 'total'>
          <div>TOTAL:</div>
          <div>${cartTotal}.00</div>
          <div>PROCEED TO CHECKOUT >></div>
        </div>
      </section>

      
    </>
  )
}

export default Cart;