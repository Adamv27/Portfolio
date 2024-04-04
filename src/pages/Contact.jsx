const Contact = () => {
	return (
		<div className='contact-page'>
			<div className='contact-container'>
				<form className='contact-form' action='https://api.web3forms.com/submit' method='POST'>
					<h1 className='title'>Contact Me</h1>
					<input type='hidden' name='access_key' value='61ac1e6d-92b3-45b8-bcfd-5d708040af6c'></input>
					<input className='input info' type='text' name='name' placeholder='Full Name' required></input>
					<input className='input info' type='email' name='email' placeholder='Email Address' required></input>
					<textarea className='input textarea' name='message' placeholder='Your Message' required></textarea>
					<button className='input submit' type='submit'>Send Message</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
