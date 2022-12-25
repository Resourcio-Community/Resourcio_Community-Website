/* -------------------------------------------- */
import webdev from '../../Images/web-dev.jpg'
import appdev from '../../Images/android-app-development.jpg'
import aiml from '../../Images/ai-ml.png'
import cyber from '../../Images/Cyber_security.jpeg'
import prog from '../../Images/programming_languages.png'
import devops from '../../Images/devops.png'
import web3 from '../../Images/web3.png'
/* ------------------------------------------- */
import './resources.css'
import { Helmet } from 'react-helmet'
import ResourceCard from '../../component/resourceCard/ResourceCard'


const Resources = () => {
  return (
    <div className='resources'>
      <Helmet>
        <title>Resources</title>
      </Helmet>

      <div className="card_container">
        <ResourceCard
          image={webdev}
          title='Web Development and Designing'
          content='Web development is the work involved in developing a website for the Internet or an intranet.'
          href='https://github.com/Resourcio-Community/Web-dev-resources'
        />
        <ResourceCard
          image={appdev}
          title='App Development'
          content='Mobile app development is the act or process by which a mobile app is developed for mobile devices.'
          href='https://github.com/Resourcio-Community/Android-Dev-resources'
        />
        <ResourceCard
          image={aiml}
          title='AI/ML'
          content='AI/ML—short for artificial intelligence (AI) and machine learning (ML)—represents an important evolution in computer science and data processing that is quickly transforming a vast array of industries.'
          href='https://github.com/Resourcio-Community/AI-ML'
        />
        <ResourceCard
          image={cyber}
          title='Cyber Security'
          content='Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from attack by malicious actors.'
          href='https://github.com/Resourcio-Community/CyberSecurity-resources'
        />
        <ResourceCard
          image={prog}
          title='Programming Languages'
          content='A programming language is a system of notation for writing computer programs.'
          href='/proglang'
        />
        <ResourceCard
          image={devops}
          title='DevOps'
          content='DevOps is a set of practices that combines software development and IT operations.'
          href='https://github.com/Resourcio-Community/Devops-resources'
        />
        <ResourceCard
          image={web3}
          title='Web3 & Blockchain'
          content='A blockchain is a type of distributed ledger technology (DLT) that consists of growing lists of records, called blocks, that are securely linked together using cryptography.Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. The timestamp proves that the transaction data existed when the block was created.'
          href='https://github.com/Resourcio-Community/Blockchain-resources-and-web3'
        />
      </div>
    </div>
  )
}

export default Resources