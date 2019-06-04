import React from 'react';
class Header extends React.Component{

    render(){
        return(
            <header class="header">
            <div class="header__wrapper">
                <div class="header__hamburger">
                    <div class="header__hamburger-block">&nbsp;</div>
                    <div class="header__hamburger-block">&nbsp;</div>
                    <div class="header__hamburger-block">&nbsp;</div>
                </div>
                <nav class="header__navigation">
                    <a href="#start" class="js-smooth-scroll">
                        <div class="js-smooth-scroll  header__navigation-element">Start...</div>
                    </a>
                    <a href="#experience" class="js-smooth-scroll">
                        <div class="header__navigation-element  header__navigation-element--experience">Skills...</div>
                    </a>
                    <a href="#features" class="js-smooth-scroll">
                        <div class="header__navigation-element  header__navigation-element--features">Guarantees...</div>
                    </a>
                    <a href="#realizations" class="js-smooth-scroll">
                        <div class="header__navigation-element  header__navigation-element--realizations">Portfolio...</div>
                    </a>
                    <a href="#contact" class="js-smooth-scroll">
                        <div class="header__navigation-element  header__navigation-element--contact">Contact...</div>
                    </a>
                </nav>
    
                <a href="#start" class="header__title-wrapper  js-smooth-scroll">
                    <div class="header__title-main"></div>
                    <div class="header__title-sub"></div>
                </a>
    
                <div class="header__social-icons">
                    <a target="_blank" href="https://twitter.com/sudeepjoel"><i class="fa fa-twitter"></i></a>
                    <a target="_blank" href="https://github.com/sudeep987"><i class="fa fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/sudeep-joel-20268a44/"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </header>

        )
    }
}
export default Header;