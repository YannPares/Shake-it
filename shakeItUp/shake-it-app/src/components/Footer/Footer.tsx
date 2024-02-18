import React from 'react'
import "./footer.css"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='footer'>
        <h6>Download the app on Play Store!</h6>
        
        <img src="https://res.cloudinary.com/moviehub/image/upload/v1708276175/ShakeItApp/APPshakeItApp_jcfsdp.png" 
        alt="DownloadApp"
        width="90"
        height="auto"
        />
      
        <p>
            &copy; 2024 <span>Made with ❤️ by <a href="https://linkedin.com/in/ian-pares" target="_blank" rel="noreferrer">Yann</a></span>
        </p>
    </footer>
  )
}

export default Footer