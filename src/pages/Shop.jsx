import './Shop.css'
import { BiSearch } from "react-icons/bi";
import {useState} from 'react'

const Shop = ({shopList, setShopList, handleCart, handleWishList}) => {
  
  const [selectVal, setSelectVal] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [rangeValue, setRangeValue] = useState(0)
  const [ourList, setOurList] = useState(shopList)

  
  //CHECK MAX RANGE INPUT VALUE
  const checkMax = () => {
    let max= 0;
      ourList.map(item => {
        if (item.price > max) {
          max= item.price
        }
      })
    return max ;
  }

  //DROPDOWN CHANGE EVENT HANDLER
  const handleChange = (e) => {
    // setSelectVal(e.target.options[e.target.selectedIndex].value)
    setSelectVal(e.target.value)

    if (selectVal === 'ratings'){
      let newList = shopList.sort((a,b) => {
      return b.rating - a.rating;
      })
      setOurList([...newList])
    }
    else if (selectVal === 'highPrices'){
      let newList = shopList.sort((a,b) => {
      return b.price - a.price;
      })
      setOurList([...newList])
    }
    else if (selectVal === 'lowPrices') {
      let newList = shopList.sort((a,b) => {
      return a.price - b.price;
      })
      setOurList([...newList])
    }
    else {
      setOurList([...shopList])
    }
  }

  
  //INPUT CHANGE EVENT HANDLER
  const handleInput = (e) => {
    setInputValue(e.target.value.toLowerCase())
    
    // if (inputValue) {
    //   let newList = shopList.filter(item => {
    //     let name = item.name.toLowerCase()
    //     return name.indexOf(inputValue) != -1 ;
    //   })
    //   setOurList([...newList])
    // } else {
    //   setOurList([...shopList])
    // }
    let newList = shopList.filter(item => {
          if (!inputValue) return true
          if (item.name.toLowerCase().includes(inputValue)) {
            return true
          }
        })
    setOurList([...newList])
  }

  //RANGE CHANGE EVENT HANDLER
  const rangeInput = (e) => {
    setRangeValue(e.target.value)

    let newList = shopList.filter(item => {
      return item.price > rangeValue ;
    })
    setOurList([...newList])
  }

  
  return(
    <>
       <section className= 'hero-shop'>
        <img src='https://images.pexels.com/photos/1860207/pexels-photo-1860207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
      </section>

      <section className= 'shop-menu'>
        <div className= 'shop-menu-wrap'>
          
          <div className= 'menu-left'>
            
            <form className= 'form-left'>
              <div>
                <label>Sort By:</label>
                <select value= {selectVal} onChange= {handleChange} >
                   <option value="all" >Default</option>
                   <option value="ratings" >Ratings</option>
                   <option value="lowPrices" >Low to High</option>
                   <option value="highPrices" >High to Low</option>
                </select>
              </div>
              <div>
                <label for="vol">Filter by Price</label>
                <input type="range" value= {rangeValue} min="0" max= {checkMax()} onChange= {rangeInput} />
              </div>
            </form>
                     
            <div className= 'left-flex'>
              {
              ourList.map(item => {
                  return(
                    <div key= {item.id} className= 'shop-card'>
                      <div className= 'card-img-wrap'>
                        <img src= {item.img} alt= '' />
                        <div className='overlay'>
                          <button onClick= { () => handleCart(item.id) } >+cart</button>
                          <button onClick= { () => handleWishList(item.id) } >+wishlist</button>
                        </div>
                      </div>
                      <h1>{item.name}</h1>
                      <h3>${item.price}</h3>                        
                    </div>
                  )
                })
              }
            </div>
            <div className= 'btn-wrap'>
              <button> PREV </button>
              <button className= 'actve'>1</button>
              <button>2</button>
              <button>3</button>
              <button> NXT </button>
            </div>
          </div>
          <div className= 'menu-right'>
            <form className='form-right'>
              <input type= 'text' placeholder= 'Search product..' value= {inputValue} onChange= {handleInput} />
              <button><BiSearch/></button>
            </form>
            <h1>Category</h1>
            <form>
              <input type="checkbox"  value="Sandwiches" />
              <label>Sandwiches</label>
              <br></br>
              <input type="checkbox" value="Burger" />
               <label>Burger</label>
              <br></br>
              <input type="checkbox" value="Drinks" />
               <label>Drinks</label>
              <br></br>
              <input type="checkbox"  value="Non-Veg" />
               <label>Non-Veg</label>
              <br></br>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Chicken Chap" />
               <label>Chicken Chap</label>
              <br></br>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Uncategorized" />   
              <label>Uncategorized</label>
            </form>
                       
          </div>            
        </div>        
      </section>
    </>
  )
}

export default Shop;

 // let passVal = (value, operation) => {
 //      let newList = shopList.sort((a,b) => {
 //      if (operation == '+') {
 //        return a.rating + b.rating;
 //      } else {
 //        return a.rating - b.rating;
 //      }
 //      })
 //    } 

              