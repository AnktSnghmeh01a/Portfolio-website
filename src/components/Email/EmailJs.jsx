import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const sendCustomEmail = (details) => {
  // Initialize EmailJS with the user ID
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);

  // Send email
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        name: details.name,
        eMail: details.eMail,
        message: details.message,
      }
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // alert("Message Send")
      toast.success('Congratulations !! , Message send')
    })
    .catch((error) => {
      console.log('FAILED...', error);
     toast.error("Failed...")
    });
};

export { sendCustomEmail };
