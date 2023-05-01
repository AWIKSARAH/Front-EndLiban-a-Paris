import { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

function ContactPage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_vw7oarf",
        "template_dcds4dk",
        formValues,
        "xrqrnLmumKRWC-6Kd"
      )
      .then(
        (response) => {
          // this.setState({ status: response.status });
          console.log("SUCCESS!", response);
          console.log(formValues);
          // Swal({
          //   title: 'Success',
          //   text: 'The email was sent successfully!',
          //   icon: 'success',
          // });
        },
        (error) => {
          console.log("FAILED...", error);
          // Swal({
          //   title: 'Error',
          //   text: 'There was an error sending the email. Please try again later.',
          //   icon: 'error',
          // });
        }
      );
  };

  return (
    <div className="contact_us_2">
      <div className="responsive-container-block big-container">
        <div className="blueBG"></div>
        <div className="responsive-container-block container">
          <form className="form-box" onSubmit={handleSubmit}>
            <div className="container-block form-wrapper">
              <p className="text-blk contactus-head">Get in Touch</p>
              <p className="text-blk contactus-subhead">
                Feel Free when you ask, about anything. We are here anytime to
                reply to you!{" "}
              </p>
              <div className="responsive-container-block">
                <div
                  className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                  id="i10mt"
                >
                  <p className="text-blk input-title">FIRST NAME</p>
                  <input
                    className="input"
                    id="ijowk"
                    name="firstName"
                    placeholder="Please enter first name..."
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">LAST NAME</p>
                  <input
                    className="input"
                    id="indfi"
                    name="lastName"
                    placeholder="Please enter last name..."
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">EMAIL</p>
                  <input
                    className="input"
                    id="ipmgh"
                    name="email"
                    placeholder="Please enter email..."
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">PHONE NUMBER</p>
                  <input
                    type="tel"
                    className="input"
                    id="imgis"
                    name="phoneNumber"
                    placeholder="Please enter phone number..."
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i"
                >
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND
                  </p>
                  <textarea
                    className="textinput"
                    id="i5vyy"
                    name="message"
                    placeholder="Please enter message..."
                    value={formValues.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <button
                className="submit-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
