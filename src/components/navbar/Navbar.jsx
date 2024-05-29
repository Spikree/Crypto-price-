import './navbar.css'
import logo from '../../assets/logo.png'
import arrowIcon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul>
            <li>
                Home
            </li>
            <li>
                Features
            </li>
            <li>
                Pricing
            </li>
            <li>
                Blog
            </li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar;