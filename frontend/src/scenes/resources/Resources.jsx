/* -------------------------------------------- */
import webdev from '../../Images/topic/web-dev.jpg'
import appdev from '../../Images/topic/android-app.jpg'
import aiml from '../../Images/topic/ai-ml.png'
import cyber from '../../Images/topic/Cyber_security.jpeg'
import prog from '../../Images/topic/programming_languages.png'
import devops from '../../Images/topic/devops.png'
import web3 from '../../Images/topic/web3.png'
import cpp from '../../Images/topic/Comp_progrm.png'
import dsa from '../../Images/topic/DSA.png'
import hackathon from '../../Images/topic/hackathon.png'
import os from '../../Images/topic/open_source.png'
/* ------------------------------------------- */
import './resources.css'
import { Helmet } from 'react-helmet'
import ResourceCard from '../../component/resourceCard/ResourceCard'
import Profile from '../../component/profile/Profile'
import { useRef } from 'react'


const Resources = () => {

  const backtopRef = useRef()
  window.addEventListener('scroll', () => {
    if (backtopRef.current !== null) {
      if (window.scrollY > 400) {
        backtopRef.current?.classList.add("active")
      } else {
        backtopRef.current?.classList.remove("active")
      }
    }
  })

  const progressBarHandler = () => {
    const totalScroll = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scroll = `${totalScroll / windowHeight}`
    const progressBar = document.getElementById('progressBar')
    progressBar.style.transform = `scale(${scroll},1)`
    progressBar.style.opacity = `${scroll}`
  }
  window.addEventListener('scroll', progressBarHandler)


  return (
    <div className='resources'>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div id="progressBarContainer" >
        <div id="progressBar" ></div>
      </div>

      <div className='search'>
        <input type="text" placeholder='search' />
        <Profile />
      </div>

      <div className="resources_h1">
        <div>Resources</div>
        <div>Welcome To Resource Gallery</div>
      </div>

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
          content='Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from attacks by malicious actors.'
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
          content='A blockchain is a type of distributed ledger technology (DLT) that consists of growing lists of records, called blocks, that are securely linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. The timestamp proves that the transaction data existed when the block was created.'
          href='https://github.com/Resourcio-Community/Blockchain-resources-and-web3'
        />
        <ResourceCard
          image={cpp}
          title='Competitive Programming'
          content='Competitive programming is solving well-defined problems by writing computer programs under specified limits.   Each problem has some specifications which need to be satisfied to solve the problem. The participants (known as competitive programmers) are required to solve these problems by writing efficient code.'
          href='https://github.com/Resourcio-Community/Competitive-Programming-Resources'
        />
        <ResourceCard
          image={dsa}
          title='Data Structure & Algorithms'
          content='Data Structure is a way of collecting and organizing data in such a way that we can perform operations on these data in an effective way. An algorithm is a finite set of instructions or logic, written in order, to accomplish a certain predefined task. An algorithm is not the complete code, it is just the core logic of a problem, which can be expressed either as an informal high-level description as pseudocode or using a flowchart.'
          href='https://github.com/Resourcio-Community/DSA-resources'
        />
        <ResourceCard
          image={hackathon}
          title='Hackathon'
          content='Hacking is creative problem-solving. A hackathon is any event of any duration where people come together to solve problems.  Participants typically form groups of about 2-5 individuals, take out their laptops, and dive into problems. Training workshops are a great parallel track, especially for newcomers but also for all participants.'
          href='https://discord.gg/mB6jpZtsN3'
        />
        <ResourceCard
          image={os}
          title='Open-Source'
          content='Open source is a term that originally referred to open source software (OSS).OSS is software that is distributed with its source code, making it available for use, modification, and distribution with its original rights. Source code is  part of the software that most computer users don’t ever see; it’s the code computer programmers manipulate to control how a program or application behaves. Programmers who have access to source code can change a program by adding to it, changing it, or fixing parts of it that aren’t working properly.'
          href='https://discord.gg/bDk4ntUguh'
        />
        <a href="#" className="back-top-btn" aria-label="back top top" ref={backtopRef}>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
      </div>

    </div>
  )
}
export default Resources