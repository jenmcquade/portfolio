import React, { useContext, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const recaptchaRef = React.createRef();

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, postApiUrl, captchaSiteKey } = contact;

  console.log(cta);

  const addContactFormActions = function () {
    const form = document.querySelector('#contactForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        recaptchaRef.current.execute();
      }
      form.classList.add('was-validated');
    }, false);
  };

  const onContactFormCaptchaApproval = () => {
    const name = document.querySelector('#contactName').value;
    const email = document.querySelector('#contactEmail').value;
    const message = document.querySelector('#contactMessage').value;
    const data = { name, email, message };
    fetch(postApiUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(() => {
        const submitBtn = document.querySelector('#contactSubmit');
        submitBtn.innerText = 'Thanks for your message!';
        submitBtn.setAttribute('disabled', true);
        submitBtn.classList.add('disabled');
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    addContactFormActions();
  }, []);

  return (
    <section id="contact">
      <Container>
        <Title title="Contact Me" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>

            <form id="contactForm" className="needs-validation" noValidate>
              <div className="form-group">
                <label htmlFor="contactName">Your Name</label>
                <input type="text" className="form-control form-control-lg contact-input" id="contactName" placeholder="Your name" required />
                <div className="invalid-feedback">
                  Please provide your name.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input type="email" className="form-control form-control-lg contact-input" id="contactEmail" placeholder="Your email" required />
                <div className="invalid-feedback">
                  Please provide your email address.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea className="form-control form-control-lg contact-input" id="contactMessage" placeholder="Your message" required />
                <div className="invalid-feedback">
                  Please provide a message to send me.
                </div>
              </div>
              <button type="submit" id='contactSubmit' className="cta-btn cta-btn--resume">{btn}</button>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                data-badge="inline"
                sitekey={captchaSiteKey || ' '}
                onChange={onContactFormCaptchaApproval}
              />
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
