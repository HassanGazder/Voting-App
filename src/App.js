import './App.css';
import { useState } from 'react';
import img1 from '../src/assets/bilawal.jpg'
import img2 from '../src/assets/imran-khan-1.jpg'
import img3 from '../src/assets/naeem.jpg'
import img4 from '../src/assets/nawaz.jpg'

function App() {
  let [isdisable,setisdisable] = useState(false)
  function handledisable(){
    setisdisable(true)
    console.log("click")
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="trtr">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="gg">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="gkjg">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="item">Action</a></li>
                  <li><a className="dropdown-item" href="fhfh">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="hgh">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="fhf" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className='container'>
        <div className='heading'>
          <h1>Vote For Your Favourite Candidate</h1>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-3'>
            <div class="card">
              <img src={img1} className="card-img-top" alt="..." width={100} height={180} />
              <div class="card-body">
                <h5 class="card-title">Team One</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button disabled={isdisable ? true : false} onClick={handledisable} type='submit' href="vote" class="btn btn-primary">Vote</button>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div class="card">
              <img src={img4} class="card-img-top" alt="..." width={100} height={180} />
              <div className="card-body">
                <h5 className="card-title">Team two</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button disabled={isdisable ? true : false}  onClick={handledisable} type='submit' href="vote" class="btn btn-primary">Vote</button>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div class="card">
              <img src={img3} class="card-img-top" alt="..." width={100} height={180} />
              <div className="card-body">
                <h5 className="card-title">Team Three</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button disabled={isdisable ? true : false}  onClick={handledisable} type='submit' href="vote" class="btn btn-primary">Vote</button>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="card">
              <img src={img2} class="card-img-top" alt="..." width={100} height={180} />
              <div className="card-body">
                <h5 className="card-title">Team Four</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button disabled={isdisable ? true : false}  onClick={handledisable} type='submit' href="vote" className="btn btn-primary">Vote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
