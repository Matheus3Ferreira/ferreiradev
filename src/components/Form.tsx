import emailjs from '@emailjs/browser';
import "../style/form.scss";

export const Form = () => {

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_2ugjrrt', 'template_mlatekh', e.target, 'g2hO0aTOX2XwmVX3x')
      .then((result) => {
          alert("Email enviado.");
      }, (error) => {
        alert(error.message);
      });
      e.target.reset();
  };

  return (
    <div className="form-container">
      <h1>Or send me an email</h1>
      <form onSubmit={sendEmail} className="form">

        <div className="form-row">
          <label></label>
          <input type="text" name="from_name" required className="form-input" placeholder="Name *" />
          <label></label>
          <input type="text" name="subject" required className="form-input" placeholder="Subject *"/>
        </div>
        <div className="form-row">
          <label></label>
          <input type="email" name="from_email" required className="form-input" placeholder="Email *"/>
          <label></label>
          <input type="phone" name="from_phone" className="form-input" placeholder="Phone"/>
        </div>
        <label></label>
        <div className="form-row">
        <textarea name="message" required placeholder="Message *"/>
        </div>
        <button type="submit">Send</button>

      </form>
    </div>
  );
};