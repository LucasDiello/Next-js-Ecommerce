import React from 'react'
import "@/styles/footer.css"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watches</a></li>
              <li><a href="#">bags</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dresses</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links flex ">
              <a href="#" className='flex justify-center items-center '>
                <GithubIcon />
              </a>
              <a href="#"  className='flex justify-center items-center '>
                <InstagramIcon />
              </a>
              <a href="#"  className='flex justify-center items-center '>
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
