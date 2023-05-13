import React from 'react'

import './SocialLinks.css'

import GitHubLogo from '../assets/logos/github.svg'
import LinkedInLogo from '../assets/logos/linkedin.svg'


function SocialLinks() {
  return (
    <div id="social-links">
      <a className="link" href="https://www.github.com/Adamv27">
        <img className="logo" src={GitHubLogo} alt="Github"/>
      </a>
      <a className="link" href="https://www.linkedin.com/in/adam-vinch-87bb00214/">
        <img className="logo" src={LinkedInLogo} alt="LinkedIn"/>
      </a>
    </div>
  )
}

export default SocialLinks