import React from "react";
import "./Contact.css";

const personalInfo = {
  designation: "Full Stack Web Developer",
  website: "www.tushark.in",
  phone: "+91 8888422801",
  city: "Pune-Maharashtra, India",
  age: "30",
  degree: "Master's In Computer Science",
  email: "kaletushar222@gmail.com"
};

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>I’d love to hear from you! Whether you have a project idea, a question, or just want to connect, feel free to reach out</p>
        </div>

        <div className="container" data-aos="fade" data-aos-delay="100">
          <div className="row gy-4">

            <div className="col-lg-4">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{ personalInfo.city }</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>{ personalInfo.phone }</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>{ personalInfo.email }</p>
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <form action="https://formbold.com/s/3dd2e" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">

                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required="true"/>
                  </div>

                  <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required="true"/>
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required="true"/>
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required="true"></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;