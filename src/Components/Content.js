import React from 'react'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
function Footer(){
    return(
        <footer id="footer" className="footer">
  <div className="footer__wrapper">
    <div className="footer__copyright">Some Rights Reserved © 2019</div>
    <a href="http://serafin.io/?utm_source=Aurora-Template&utm_medium=Footer-Image&utm_campaign=Freebie" target="_blank" className="footer__image">&nbsp;</a>
  </div>
</footer>

    )
}
class Content extends React.Component{
render()
{
    return(
        <div className="content">
         <Experience/>
         <Projects/>
         <Contact/>
         <Footer/>
       </div>
    )
}

}

export default Content;