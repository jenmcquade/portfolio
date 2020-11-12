import React, { useContext, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  useEffect(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission if invalid
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
          const URL = "https://a81a99f6fa.execute-api.us-west-2.amazonaws.com/Prod/contact";
          const name = document.querySelector('#contactName').value;
          const email = document.querySelector('#contactEmail').value;
          const message = document.querySelector('#contactMessage').value;
          const data = {
            name: name,
            email: email,
            message: message
          };
          fetch(URL, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
          })
          .then(() => {
            let submitBtn = document.querySelector('#contactSubmit');
            submitBtn.innerText = 'Thanks for your message!';
            submitBtn.setAttribute('disabled', true);
            submitBtn.classList.add('disabled');
          })
          .catch(err => {
            console.error(err);
          });
        }
        form.classList.add('was-validated');
      }, false);
    });
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

            <form className="needs-validation" noValidate>
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
              <button type="submit" id='contactSubmit' className="cta-btn cta-btn--resume g-recaptcha" data-sitekey="6LeD9eEZAAAAADAGDzn3tcg2DFy0db3md1onza_s" data-callback="validate">{btn}</button>
            </form>
            {/*
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
            */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
