import React from 'react';
class Intro extends React.Component{

    render(){
        return(

<section id="hero" class="hero">
<div class="hero__background">&nbsp;</div>
<div class="hero__gradient">&nbsp;</div>
<div class="hero__pattern">&nbsp;</div>
<div class="hero__content">
    <div class="hero__content-wrapper">
        <div class="hero__title-wrapper">
            <div class="hero__title-large">Hello, this is Sudeep Joel.</div>
            <div class="hero__title-small">	I'm a software developer.</div>
        </div>

        <div class="hero__call-to-action">
            <br/><br/><a href="https://goo.gl/lp9Gd6" target="_blank" class="hero__button  ghost-button  ghost-button--hero">Download Resume      <i class="fa fa-download"></i></a><a disabled="disabled" target="_blank" class="hero__alt-button">or &nbsp; scroll down to find out more about me.</a>
    
        </div>
    </div>
</div>
</section>
    
   )
    
    
    }


}

export default Intro;