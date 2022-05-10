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

    <form onSubmit={sendEmail} className="form">

      <div className="form-row">
        <label></label>
        <input type="text" name="from_name" placeholder="Name"/>
        <label></label>
        <input type="email" name="subject" placeholder="Subject"/>
      </div>
      <div className="form-row">
        <label></label>
        <input type="email" name="from_email" placeholder="Email"/>
        <label></label>
        <input type="email" name="from_phone"placeholder="Phone"/>
      </div>
      <label></label>
      <textarea name="message" placeholder="Message"/>
      <button type="submit">Send</button>
    </form>
  );
};