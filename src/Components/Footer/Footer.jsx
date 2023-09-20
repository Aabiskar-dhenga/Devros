import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerCardWrapper">
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Courses</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Code Editor</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <ul>
            <li>
              <AiFillFacebook />
              <p>Facebook</p>
            </li>
            <li>
              <BsInstagram />
              <p>Instagram</p>
            </li>
            <li>
              <BsGithub />
              <p>Github</p>
            </li>
            <li>
              <FaTiktok />
              <p>Tiktok</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <BsTelephone />
              <p>+977-9867275074</p>
            </li>
            <li>
              <AiOutlineMail />
              <p>devrosofficial@gmail.com</p>
            </li>
            <li>
              <MdOutlineLocationOn />
              <p>Tilottama-04, Janakinagar</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <AiOutlineCopyrightCircle />
        Devros Pvt Ltd. 2023. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
