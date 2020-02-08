import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { apiCall } from "../../services/api";

const EmailShare = () => {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("Email Address");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  async function sendEmail(e) {
    e.preventDefault();
    try {
      await apiCall("post", "api/email/", { email: email });
      setEmail("");
      setPlaceholder("Send to another friend...");
      toast.success("email sent!");
    } catch (err) {
      setEmail("");
      toast.error("sorry, please try agian");
    }
  }

  return (
    <Form className="emailShare" onSubmit={sendEmail}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          className="textBox"
          type="email"
          required
          placeholder={placeholder}
          onChange={handleChange}
          value={email}
        />
        <Button variant="primary" type="submit">
          Invite
        </Button>
      </Form.Group>
      <ToastContainer />
    </Form>
  );
};

export default EmailShare;
