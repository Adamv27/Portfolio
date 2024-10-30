import GameOfLife from "../components/backgrounds/GameOfLife"

import "../styles/Contact.css";

const Contact = () => {
	return (
		<>
			<GameOfLife />
			<form
				action="https://api.web3forms.com/submit"
				method="POST"
			>
				<legend>Contact Me</legend>
				<input className="contact-control" name="email" type="email" placeholder="Email Address" />
				<input className="contact-control" name="name" placeholder="Name" />
				<textarea className="contact-control" name="message"></textarea>
				<input type="hidden" name="access_key" value="61ac1e6d-92b3-45b8-bcfd-5d708040af6c"></input>
				<button className="contact-control" type="submit">Send Message</button>
			</form>
		</>
	)
}

export default Contact 
