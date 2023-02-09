import './Contact.css'

const Contact = () => {
  return(
    <>
      <section className= 'contact-about'>
        <img src='https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </section>

      <section>
        <div className= 'contact-flex'>
          <div className= 'contact-left'>
            <img src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
          <div className= 'contact-right'>
            <form onSubmit = {(e) => e.preventDefault()}>
              <h1>Lets<span> Connect</span> :)</h1>
              <label>Name:</label>
              <br></br>
              <input type= 'text' placeholder= 'Enter your name' />
              <br></br>
              <label>Email:</label>
              <br></br>
              <input type= 'text' placeholder= 'Enter your email' />
              <br></br>
              <label>Message:</label>
              <br></br>
              <textarea placeholder= 'Tell us something...' />
              <br></br>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact