import React from "react";
import "./contact.css";
import { Button, TextField } from "@mui/material";

function contactUs() {
  return (
    <div className="contact--container">
      <div className="contact--wrapper">
        <section className="contacct--box--container">
          <div className="contact--span">
            <div className="contact--title">Contact US </div>
            <div className="contact--body">

<div className="contact--social">
<div className="contact--logo"></div>
<div className="contact--logo2"></div>
{/* <img src={logo} alt="hello" /> */}
{/* <img src={logo2} alt="hello" className="contact--logo2"/> */}
</div>
<div className="contact--content">

<div className="contact--content">
  <TextField
    label="Your Name"
    variant="outlined"
    fullWidth
    margin="normal"
    size="small"
  />
  <TextField
    label="Last Name"
    variant="outlined"
    fullWidth
    margin="normal"
    size="small"
  />
  <TextField
    label="Email"
    variant="outlined"
    fullWidth
    margin="normal"
    size="small"
  />
  <TextField
    label="Subject"
    variant="outlined"
    fullWidth
    margin="normal"
    size="small"
  />
  <TextField
    label="Message"
    variant="outlined"
    fullWidth
    margin="normal"
    multiline
    rows={4}
  />
  <Button color="success" size="large" fullWidth variant="outlined">Send</Button>
</div>
</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default contactUs;
