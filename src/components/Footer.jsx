import React from 'react'
import { GiHamburger } from "react-icons/gi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import './Footer.css'
function Footer() {
  return (
   <>
    <footer>
        <div className="footer-logo">
          <GiHamburger /> <h3>logoipsum</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          odit quos mollitia quisquam!
        </p>
        <div className="footer-list">
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Project</li>
          <li>Blog</li>
        </div>
        <div className="icons">
          <IoLogoFacebook />
          <FaInstagram />
          <FaTwitterSquare />
          <FaGithub />
          <IoFootballOutline />
        </div>
      </footer>
   </>
  )
}

export default Footer
