import React from 'react'
class Experience extends React.Component
{
    render(){
        return(
            <section id="experience" class="experience">
			<div class="experience__hollow-arrow">&nbsp;</div>
			<div class="experience__wrapper">
				<div class="section-header">
					<div class="section-header__title  section-header__title--experience">My Skills...</div>
					<div class="section-header__subtitle">Software and technologies that I'm experienced in</div>
				</div>
				<div class="experience__icons-wrapper">
					<div class="experience__icon  experience__icon--html5">
						<div class="experience__icon-description">HTML5</div>
					</div>
					<div class="experience__icon  experience__icon--css3">
						<div class="experience__icon-description">CSS3</div>
					</div>
					<div class="experience__icon  experience__icon--javascript">
						<div class="experience__icon-description">JavaScript</div>
					</div>
					<div class="experience__icon  experience__icon--sass">
						<div class="experience__icon-description">SASS</div>
					</div>
					<div class="experience__icon  experience__icon--jquery">
						<div class="experience__icon-description">jQuery</div>
					</div>
					<div class="experience__icon  experience__icon--git">
						<div class="experience__icon-description">GIT</div>
					</div>
					<div class="experience__icon  experience__icon--wordpress">
						<div class="experience__icon-description">WordPress</div>
					</div>
					<div class="experience__icon  experience__icon--photoshop">
						<div class="experience__icon-description">Adobe Photoshop</div>
					</div>
					<div class="experience__icon  experience__icon--illustrator">
						<div class="experience__icon-description">Adobe Illustrator</div>
					</div>
					<div class="experience__icon  experience__icon--fireworks">
						<div class="experience__icon-description">Adobe Fireworks</div>
					</div>
					<div class="experience__icon  experience__icon--bootstrap">
						<div class="experience__icon-description">Bootstrap 3</div>
					</div>
					<div class="experience__icon  experience__icon--foundation">
						<div class="experience__icon-description">Foundation 5</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}

export default Experience;