import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container mt-5">
    <h2 className="text-center">Get In Touch</h2>
      <Form style={{ width: "60%", margin: "30px auto" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Email </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Submit</Button>

      </Form>
    </div>
  );
};

export default Contact;
