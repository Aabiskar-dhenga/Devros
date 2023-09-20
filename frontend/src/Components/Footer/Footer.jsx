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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerCardWrapper">
        <div className="footHead">
          <h2 className="footer_heading">Quick Links</h2>
          <ul className="footer_lists">
            <li>Courses</li>
            <Link className="supportingLink" to="/about">
              <li>About Us</li>
            </Link>
            <Link className="supportingLink" to="/service">
              <li>Services</li>
            </Link>
            <li>Code Editor</li>
            <Link className="supportingLink" to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footHead">
          <h2 className="footer_heading">Social</h2>
          <ul className="footer_lists">
            <li className="listedItemsWrapper">
              <AiFillFacebook />
              <p>Facebook</p>
            </li>
            <li className="listedItemsWrapper">
              <BsInstagram />
              <p>Instagram</p>
            </li>
            <li className="listedItemsWrapper">
              <BsGithub />
              <p>Github</p>
            </li>
            <li className="listedItemsWrapper">
              <FaTiktok />
              <p>Tiktok</p>
            </li>
          </ul>
        </div>
        <div className="footHead">
          <h2 className="footer_heading">Contact</h2>
          <ul className="footer_lists">
            <li className="listedItemsWrapper">
              <BsTelephone />
              <p>+977-9867275074</p>
            </li>
            <li className="listedItemsWrapper">
              <AiOutlineMail />
              <p>devrosofficial@gmail.com</p>
            </li>
            <li className="listedItemsWrapper">
              <MdOutlineLocationOn />
              <p>Tilottama-04, Janakinagar</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_line_wrapper">
        <div className="footer_line"></div>
      </div>
      <div className="copyrightBox">
        <AiOutlineCopyrightCircle />
        <p> Devros Pvt Ltd. 2023. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
