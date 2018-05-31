import React from 'react'

import cvIcon from '../images/cv-icon.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa fa-2x fa-diamond"></span>*/}
            {/*<span className="icon fa-space-shuttle"></span>*/}
            {/*<span className="icon fa-eye"></span>*/}
            {/*<span className="icon fa-rocket"></span>*/}
            {/*<span className="icon fa-wheelchair-alt"></span>*/}
            <span className="image main"><img src={cvIcon} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Crypto Voice</h1>
                <p>Welcome to a free for all trading community</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href='https://discord.gg/2Qb766r'>Discord</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
