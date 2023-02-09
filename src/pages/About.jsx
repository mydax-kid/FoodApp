import './About.css'
import { RiVipCrownLine } from "react-icons/ri";
import { SlCup } from "react-icons/sl";
import { RiTrophyLine } from "react-icons/ri";
import Abouter from '../assets/about.png'


const About = () => {
  return(
    <>
      <section className= 'hero-about'>
        <img src='https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </section>
      <section className='info'>
        <div className= 'info-left'>
          <img src= {Abouter} alt='' />
        </div>
        <div className= 'info-right'>
          <h1>Food is an important part of a balanced diet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <button>Show More</button>
        </div>
      </section>

      <section className= 'choice'>
        <h1>Why Choose Us?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <div className='img-wrap'>
          <img src='https://images.pexels.com/photos/14537699/pexels-photo-14537699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </div>
        <div className= 'choice-icons'>
          <div>
            <RiVipCrownLine className='icon'/>
            <h1>Best Chef</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt enim ad minim veniam</p>
          </div>
          <div>
            <SlCup className='icon'/>
            <h1>120 Item Food</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt enim ad minim veniam</p>
          </div>
          <div>
            <RiTrophyLine className='icon'/>
            <h1>Best Environment</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt enim ad minim veniam</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;