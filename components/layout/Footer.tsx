import React from 'react'
import "@/styles/footer.css"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>empresa</h4>
            <ul>
              <li><a href="#">sobre nós</a></li>
              <li><a href="#">nossos serviços</a></li>
              <li><a href="#">política de privacidade</a></li>
              <li><a href="#">programa de afiliados</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ajuda</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">envio</a></li>
              <li><a href="#">devoluções</a></li>
              <li><a href="#">status do pedido</a></li>
              <li><a href="#">opções de pagamento</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>loja online</h4>
            <ul>
              <li><a href="#">relógios</a></li>
              <li><a href="#">bolsas</a></li>
              <li><a href="#">sapatos</a></li>
              <li><a href="#">vestidos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>siga-nos</h4>
            <div className="social-links">
              <a href="#">
                <GithubIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
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
