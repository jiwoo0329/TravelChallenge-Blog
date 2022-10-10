import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <p className="headerTitleSm">Travel & Challenge</p>
            <p className="headerTitleLg">Blog</p>
        </div>
        <img className="headerImg" src="images/benner.jpg" alt=" banner" />
        
    </div>
  )
}

export default Header