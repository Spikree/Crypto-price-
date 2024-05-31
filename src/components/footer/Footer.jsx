import './footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <p>copyright @ {year} cryptoNow - All Right Reserved</p>
    </div>
  )
}

export default Footer