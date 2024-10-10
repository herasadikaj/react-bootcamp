/* eslint-disable no-undef */
import "./website.css";

const Contact = () => {


    return (
        <div>
            <h2>Contact Me</h2>
            <form className="contact-form" id="contactForm" action="your-form-handler-url" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    );
}

export default Contact;
