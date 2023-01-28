import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
    
  return (
    <div className='footer'>
        <div className="socialMedia">

        <a target="_blank" href="https://www.instagram.com/sundra_11/">
          <InstagramIcon/>
        </a>  
        
        <a target="_blank" href="https://www.linkedin.com/in/sundrabalakrishnan/">
          <LinkedInIcon/>
        </a>
        
        <a target="_blank" href="https://github.com/Sundra11">
        <GitHubIcon/>
        </a>
        
        

        </div>
        <p> &copy; 2023 portfolio</p>
    </div>
  )
}

export default Footer