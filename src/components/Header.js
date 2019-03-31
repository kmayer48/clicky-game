
import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Clicky Game <i className="fas fa-mouse-pointer"></i><br/> Emoji 😏 Edition </b></h1>
        <br/>
        <h5 className="subtitle">Click an emoji to get started! After each click, the emojis will shuffle. <br/> The goal is to select each emoji only once 💯</h5>
    </div>
)

export default Header;