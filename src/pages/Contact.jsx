import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function Contact() {
	return (
    <div id="contact-page" className="d-flex align-items-center">
      <Container id="contact-container">
        <Form
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <legend>Contact Me</legend>
          <FloatingLabel className="mb-3" label="Full Name">
              <Form.Control
                name="name"
                placeholder="Full Name"
              />
          </FloatingLabel>
          <FloatingLabel className="mb-3" label="Email Address">
            <Form.Control
              name="email"
              placeholder="Email Address"
              type="email"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingMessageArea" label="Message">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Your message"
            />
          </FloatingLabel>
          <input type="hidden" name="access_key" value="61ac1e6d-92b3-45b8-bcfd-5d708040af6c"></input>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container> 
    </div>
  )
}

export default Contact;
