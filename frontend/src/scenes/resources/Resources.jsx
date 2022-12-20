import './resources.css'
import webdev from '../../Images/web-dev.jpg'
import appdev from '../../Images/android-app-development.jpg'
import aiml from '../../Images/ai-ml.png'
import cyber from '../../Images/Cyber_security.jpeg'
import prog from '../../Images/programming_languages.png'
import devops from '../../Images/devops.png'
import { Helmet } from 'react-helmet'


const Resources = () => {
  return (
    <div className='resources'>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="box">
        <img src={webdev} alt="Web Development" />
        <h2>Web Development</h2>
        <p>Web development is the work involved in developing a website for the Internet or an intranet.</p>
        <a href="https://github.com/Resourcio-Community/Web-dev-resources" target="_blank">
          <button> Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={appdev} />
        <h2>App Development</h2>
        <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices.</p>
        <a href="https://github.com/Resourcio-Community/Android-Dev-resources" target="_blank">
          <button> Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box ai">
        <img src={aiml} />
        <h2>AI/ML</h2>
        <p>AI/ML—short for artificial intelligence (AI) and machine learning (ML)—represents an important evolution
          in computer science and data processing that is quickly transforming a vast array of industries.</p>
        <a href="https://github.com/Resourcio-Community/AI-ML" target="_blank">
          <button> Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box cyb">
        <img src={cyber} />
        <h2>Cyber Security</h2>
        <p>Computer security, cybersecurity, or information technology security is the protection of computer
          systems and networks from attack by malicious actors.</p>
        <a href="https://github.com/Resourcio-Community/CyberSecurity-resources" target="_blank">
          <button> Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box lang">
        <img src={prog} />
        <h2>Programming Languages</h2>
        <p>A programming language is a system of notation for writing computer programs.</p>
        <a href="proglang.html" target="_blank">
          <button> Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={devops} />
        <h2>DevOps</h2>
        <p>DevOps is a set of practices that combines software development and IT operations.</p>
        <a href="https://github.com/Resourcio-Community/Devops-resources" target="_blank">
          <button> Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
    </div>
  )
}

export default Resources