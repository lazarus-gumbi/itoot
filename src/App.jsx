import { useState } from 'react'
import './App.css'
import chalkboard from './assets/chalkboard.svg'
import arrow from './assets/arrow.svg'
import arrow2 from './assets/arrow2.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="main">
        <div className="nav">
          <h1>iToot</h1>
          <a className="btn btn-cta">Request Tutor</a>
        </div>
        <div className="intro">
          <div className="main-left">
            <h1 className="main-heading">Personal Tutoring Done Right</h1>
            <h5 className="main-subheading">Getting a personal tutor has never been this easy</h5>
            <a className="btn btn-cta">Request Tutor</a>
          </div>
          <div className="main-right">
            <img src={chalkboard} alt="chalkboard" />
          </div></div>
      </section>
      <section className="steps">
        <h3 className="heading">HOW IT WORKS?</h3>

        <img src={arrow} alt="arrow" className='arrow1' />

        <div className="cards">
          <div className="card">
            <h4 className="number">1</h4>
            <h4 className="card-heading">Request a tutor</h4>
            <p className="card-details">
              Use the platform to request a tutor by filling out the "request tutor" form and wait for communication from us
            </p>
            <a className="btn btn-cta">Request Tutor</a>
          </div>
          <div className="card">
            <h4 className="number">2</h4>
            <h4 className="card-heading">Get on call with tutor</h4>
            <p className="card-details">
              You will receive a phone call/ email from us to communicate on the schedule and more details before closing the deal and starting the tutor process
            </p>
          </div>
          <div className="card">
            <h4 className="number">3</h4>
            <h4 className="card-heading">Start tutor process</h4>
            <p className="card-details">
              After laying down the schedule on when to take the classes and fine tuned all the details, start the process
            </p>
          </div>
        </div>
        <img src={arrow2} alt="arrow" className='arrow2' />
      </section>
      <section className="request">
        <h3 className='heading'>REQUEST TUTOR</h3>
        <div className="form">
          <form action="#" method="post">
            <input type="text" name="fullname" id="fullname" className='fullwidth' placeholder='Full Name' />
            <div className="contacts"><input type="email" name="email" id="email" placeholder='email' className='halfwidth'/>
              <input type="number" name="phonenumber" id="phonenumber" placeholder='phone number' className='halfwidth'/></div>
            <div className="selectors">
              <select name="city" id="city" className='halfwidth'>
                <option value="Mbabane">Mbabane</option>
                <option value="Manzini">Manzini</option>
              </select>
              <select name="subject" id="subject" className='halfwidth'>
                <option value="IT">Information Technology</option>
              </select>
            </div>
            <input type="text" name="topic" id="topic" className='fullwidth' placeholder='Problem Topic' />
            <input type="submit" value="Submit" className='btn btn-submit' />
          </form>
        </div>
      </section>
      <div className="footer">
        <h3>© iToot 2022</h3>
      </div>
    </div>
  )
}

export default App
