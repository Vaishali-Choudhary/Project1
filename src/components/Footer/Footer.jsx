import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cumque vitae et odit maiores explicabo repellendus minus. Doloribus praesentium et, illum odio labore aliquid debitis ex consequuntur, corporis, dignissimos id!
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cumque vitae et odit maiores explicabo repellendus minus. Doloribus praesentium et, illum odio labore aliquid debitis ex consequuntur, corporis, dignissimos id!
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">LAMASTORE</span>
                <span className="copyright">
                    &copy; Copyright 2023. All Rights Reserved
                </span>
            </div>
            <div className="right">
                <img src='/img/payment.png'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
