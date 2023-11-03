import {Link} from "react-router-dom"
import Image1 from "../images/Picture1.png"

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the Legends of the Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure earum ullam deserunt aperiam ipsam.</p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={Image1} alt="Main header image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
