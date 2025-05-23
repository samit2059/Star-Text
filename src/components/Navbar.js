import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">{props.Aboutdetail}</Link>
          </li> */}
        
          {/* <li className="nav-item">
            <a className="nav-link disabled" href='/'>Disabled</a>
          </li> */}
        </ul>
        {/* <form className="d-flex"> */}
        {/* <div className={`form-check form-switch text-${props.mode === 'light'?'red':'light'}`}>
             <input className="form-check-input"onClick={props.RedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label " htmlFor ="flexSwitchCheckDefault">Enable Red Dark Mode</label>
        </div> */}
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
             <input className="form-check-input"onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label " htmlFor ="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        {/* <div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button"  onClick={props.ToggleMode} class="btn btn-outline-primary">light</button>
  <button type="button"  onClick={props.ToggleMode} class={` btn btn-outline-primary form-check form-switch text-${props.mode === 'light'?'dark':'dark'}`}>Dark</button>
  <button type="button"  onClick={props.ToggleMode} class="btn btn-outline-primary">red</button>
</div> */}
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
          {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
        {/* </form> */}
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired,
    Aboutdetail: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title :'Set title here',
    Aboutdetail: 'about me'
};// if not defined in the front page of navbar
