import React from 'react'
class Contact extends React.Component {
    render(){
        return(
            <section id="contact" className="contact">
  <div className="contact__wrapper">
    <div className="section-header">
      <div className="section-header__title  section-header__title--contact">Contact...</div>
      <div className="section-header__subtitle">Contact me through provided social media or just use the contact form</div>
    </div>
    <div className="contact__icons-wrapper">
      <div className="contact__icon">
        <a target="_blank" href="mailto:msudeep.joel@gmail.com"><i className="fa fa-envelope" /></a>
        <div className="contact__icon-description">msudeep.joel@gmail.com</div>
      </div>
      <div className="contact__icon">
        <a target="_blank" href="https://twitter.com/sudeepjoel"><i className="fa fa-twitter" /></a>
        <div className="contact__icon-description">@sudeepjoel</div>
      </div>
      <div className="contact__spacer">&nbsp;</div>
      <form className="contact__form">
        <div className="contact__textarea-wrapper">
          <label htmlFor="message_content" className="contact__label">Message</label>
          <div className="contact__response-ajax-text">&nbsp;</div>
          <textarea id="message_content" rows={10} placeholder="Hello! Would you be interested in collaboration for the greatest project ever?" required defaultValue={""} />
        </div>
        <div className="contact__bottom-wrapper">
          <div className="contact__sender-info-wrapper">
            <div className="contact__input-wrapper  contact__input-wrapper--name">
              <label htmlFor="sender_name" className="contact__label">Your Name</label>
              <div className="contact__response-ajax-text">&nbsp;</div>
              <input id="sender_name" type="text" placeholder="John Kowalski" required />
            </div>
            <div className="contact__input-wrapper  contact__input-wrapper--email">
              <label htmlFor="sender_email" className="contact__label">Your E-mail</label>
              <div className="contact__response-ajax-text">&nbsp;</div>
              <input id="sender_email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="contact__button-wrapper  ghost-button  ghost-button--contact">
            <div className="contact__paper-plane-wrapper"><i className="fa fa-paper-plane" /></div>
            <div className="contact__response  contact__response--success">
              <div className="contact__response-title"><i className="fa fa-check" /> Message was sent.</div>
              <div className="contact__response-description  contact__response-description--success">&nbsp;</div>
            </div>
            <div className="contact__response  contact__response--error">
              <div className="contact__response-title"><i className="fa fa-warning" /> Error.</div>
              <div className="contact__response-description  contact__response-description--error">Message couldn't be sent.</div>
            </div>
            <input id="contact__submit" type="button" defaultValue=" " />
          </div>
        </div>
      </form>
    </div>
  </div></section>

        )
    }
}
export default Contact;