import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './styles/Signup.css'


export default function Signin() {
  return (
    <div className="container">
      <div className="icon pb-16 text-center">
        <FontAwesomeIcon icon={faUser} size="3x" />
      </div>
      <div>
        <h1>
          Islamabad Real Estates
        </h1>
        <p>
          Invest in Future
        </p>
        <form className="inputForm space-y-2">
          <input placeholder="Enter Email" type="text" required />
          <input placeholder="Enter your Password" type="password" required />
          <button type="submit" className="py-1 px-3">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}