import {Link} from 'react-router-dom'
import './Home.css'
import Hommer from '../assets/home.png'

const Home = () => {
  return(
    <>
      <section className= 'hero'>
        <div className= 'hero-container'>
          <div className="hero-left">
            <h1><span>The</span> art of speed food quality</h1>
            <p>Come get a taste of our delicious cuisines made with love and warmth, come have an experience of your life</p>
            <Link to='/menu' className='menu-link'>See Menu</Link>
          </div>
          <div className="hero-right">
            <img src= {Hommer} alt='' />
          </div>
        </div>
      </section>
      
      <section className= 'product'>
        <div className= 'product-container'>
          
          <div className="product-left">
            <h1><span>We</span> create the best products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            <Link to='/about' className='menu-link'>Read More</Link>
          </div>
          
          <div className="product-right">

            <div class= 'container'>
  <div class= 'item1'><img src='https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
  <div><img src='https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
  <div><img src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
</div>
            
          </div>
        </div>
      </section>

      <section className= 'category'>
        <div className='category-container'>
          <h3>Food Category</h3>
          <h1>Choose Food Item</h1>
          <div className= 'fooditems'>
            <div><img src='https://images.pexels.com/photos/10267339/pexels-photo-10267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
            <div><img src='https://images.pexels.com/photos/5640046/pexels-photo-5640046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
            <div><img src='https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
            <div><img src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /></div>
          </div>
        </div> 
      </section>

      <section className= 'stats'>
        <div className= 'stats-container'>
          <div>
            <img src='https://foodtucks.web.app/static/media/Group2.41be7b75101fbb72810f34303ad1c2e3.svg' alt='' />
            <h1>420</h1>
            <p>Professional Chefs</p>
          </div>
          <div>
            <img src='https://foodtucks.web.app/static/media/Group3.be84b7bd7e616f30a1e181c1c20a1765.svg' alt='' />
            <h1>320</h1>
            <p>Items of Food</p>
          </div>
          <div>
            <img src='https://foodtucks.web.app/static/media/Group.6454e77b059aabef5669a4e43a1385fd.svg' alt='' />
            <h1>30+</h1>
            <p>Years of Experience</p>
          </div>
          <div>
            <img src='https://foodtucks.web.app/static/media/Group1.5513ff712cee8318cf2faf41e178599b.svg' alt='' />
            <h1>220</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home