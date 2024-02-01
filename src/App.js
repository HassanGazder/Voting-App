import "./App.css";
import { useState } from "react";
import img1 from "../src/assets/bilawal.jpg";
import img2 from "../src/assets/imran-khan-1.jpg";
import img3 from "../src/assets/naeem.jpg";
import img4 from "../src/assets/nawaz.jpg";

function App() {
  let [isdisable, setisdisable] = useState(false);
  // let [voted,setvoted] = useState("");
  function handledisable(event) {
    let element = event.target
    console.log(element)
    setisdisable(true);
    console.log("click");
    // setvoted("voted")
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="trtr">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="gg">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="gg">
                  About
                </a>
              </li> <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="gg">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="gg">
                  Result
                </a>
              </li>
            </ul>
            <form className="d-flex justify-content-center align-items-center">
            <i style={{color:"white"}} className="fa-regular fa-user me-2 mb-1"></i>
              <h5 className="text-white me-3">Hassan Gazder</h5>
              <button className="btn btn-outline-success" type="submit">Log Out</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="heading mt-5">
          <h1 className="fw-bold">Vote For Your Favourite Candidate</h1>
        </div>
        <div className="alert-div d-flex justify-content-center">
          <div  className={isdisable ? "alert alert-success w-50 d-block" :"alert alert-success w-50 d-none"} role="alert">
            Your Vote Has Been Submitted Successfully
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <div class="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PPP</h5>
                <p class="card-text">
                  "I can't let my mother's death have been in vain. Democracy is
                  the best revenge, and we will have it"
                </p>
                <button
                  disabled={isdisable ? true : false}
                  onClick={handledisable}
                  type="submit"
                  href="vote"
                  class="btn btn-success"
                >
                  {/* {isdisable ? voted : "vote"} */}
                  <p>vote1</p>
                </button>
                <p className="note">
                  Be Careful Vote Would Be Submitted Only Once
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PML-N</h5>
                <p class="card-text">
                  "It is not justice when you beat someone after tying their hands, but award a clean chit to another who openly confesses his crimes"
                </p>
                <button
                  disabled={isdisable ? true : false}
                  onClick={handledisable}
                  type="submit"
                  href="vote"
                  class="btn btn-success"
                >
                  {/* {isdisable ? voted : "vote"} */}
                  <p>vote2</p>
                </button>
                <p className="note">
                  Be Careful Vote Would Be Submitted Only Once
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class="card">
              <img src={img3} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jamatey Islami</h5>
                <p className="card-text">
                  "a man in white shirt standing next to a scale with the words
                  let's rebuild karachi"
                </p>
                <button
                  disabled={isdisable ? true : false}
                  onClick={handledisable}
                  type="submit"
                  href="vote"
                  class="btn btn-success"
                >
                  {/* {isdisable ? voted : "vote"} */}
                  <p>vote3</p>
                </button>
                <p className="note">
                  Be Careful Vote Would Be Submitted Only Once
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <img src={img2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PTI</h5>
                <p className="card-text">
                  "It is not defeat that destroys you,it is being demoralized by
                  defeat that destroy you."
                </p>
                <button
                  disabled={isdisable ? true : false}
                  onClick={handledisable}
                  type="submit"
                  href="vote"
                  className="btn btn-success"
                >
                  {/* {isdisable ? voted : "vote"} */}
                  <p>vote3</p>
                </button>
                <p className="note">
                  Be Careful Vote Would Be Submitted Only Once
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
