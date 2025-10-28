
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'

import ChatWidget from './ChatWidget'

const MobilePhoneStore = () => {

  return (

    <>
      <header className="header">
        <div className="container">
          <div className="top-bar">
            <div className="logo">PhoneEasy</div>
            <div className="search-bar">
              <input type="text" placeholder="Search for phones..." />
              <button>
                <FaSearch />
              </button>
            </div>

            <div className="nav-icons">
              <a href="#account">
                <FaUser size={20} />
              </a>
              <a href="#wishlist">
                <FaHeart size={20} />
                <span className="badge">{3}</span>
              </a>
              <a href="#cart">
                <FaShoppingCart size={20} />
                <span className="badge">{2}</span>
              </a>
            </div>
          </div>

          <nav className="nav-bar">
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">OnePlus</a></li>
              <li><a href="#">Redmi</a></li>
              <li><a href="#">Oppo</a></li>
              <li><a href="#">Nothing</a></li>
              <li><a href="#">Samsung</a></li>
              <li><a href="#">Vivo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero">
          <div className="container">
            <h1>Diwali Sale is Live!</h1>
            <p>Get up to 50% off on selected items. Limited time offer.</p>
            <button>Shop Now</button>
          </div>
        </div>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">OnePlus</a></li>
                <li><a href="#">Redmi</a></li>
                <li><a href="#">Oppo</a></li>
                <li><a href="#">Nothing</a></li>
                <li><a href="#">Samsung</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Order Tracking</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Sustainability</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect With Us</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="copyright">
            {/* Copyright symbol, dynamic year, and company name */}
            &copy {new Date().getFullYear()} PhoneEasy. All rights reserved.
          </div>
        </div>
      </footer>

      <ChatWidget />
    </>
  )
}

export default MobilePhoneStore
