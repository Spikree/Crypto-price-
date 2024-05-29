import './navbar.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { coinContext } from '../../context/CoinContext'

const Navbar = () => {

    const {setCurrency} = useContext(coinContext)

    const currencyHandler = (event) => {
        switch(event.target.value) {
            case "usd": {
                setCurrency({name:"usd", symbol: "$"});
                break;
            }
            case "eur": {
                setCurrency({name:"eur", symbol: "€"})
                break;
            }
            case "inr": {
                setCurrency({name:"inr", symbol: "₹"})
                break;
            }
            default: {
                setCurrency({name:"usd", symbol: "$"});
                break;
            }
        }
    }

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
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar;