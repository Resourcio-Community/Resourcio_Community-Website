import sayan from '../../Images/Sayan.jpeg'
import koustav from '../../Images/Koustav.jpeg'
import rohit from '../../Images/Rohit.jpeg'
import snehadrita from '../../Images/Snehadrita.jpeg'
import purbali from '../../Images/Purbali.jpeg'
import soumya from '../../Images/Soumya.jpeg'
import ayishik from '../../Images/Ayishik.jpg'
import gunjan from '../../Images/Gunjan.jpeg'
import snigdha from '../../Images/Snigdha.jpeg'

import ContactCard from '../../component/contactCard/ContactCard'
import { Link } from 'react-router-dom'
import blogBg from '../../Images/blog-bg.svg'


const Team = () => {
    return(
            <section className="section blog has-bg-image" id="team" aria-label="contact" style={{ "backgroundImage": `url(${blogBg})` }}>
              <div className="container">
                <p className="section-subtitle" style={{ "color": "var(--gray-web)" }}>Team</p>
                <h2 className="h2 section-title">Get in touch with us</h2>
                <ul className="grid-list">

                  <li className="dev_card">
                    <ContactCard
                      image={soumya}
                      name='Soumyajit Mondal'
                      role='Owner & Developer'
                      linkedIn='https://www.linkedin.com/in/soumyajit-mondal-a0692b234/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={ayishik}
                      name='Ayishik Das'
                      role='Co-Owner & Marketing'
                      linkedIn='https://www.linkedin.com/in/ayishik-das-35a67a1a5/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={sayan}
                      name='Sayan Mukherjee'
                      role='Content Writer'
                      linkedIn='https://www.linkedin.com/in/sayan-mukherjee-975175229/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={koustav}
                      name='Koustav Chatterjee'
                      role='Social Media Handler'
                      linkedIn='https://www.linkedin.com/in/koustav-chatterjee-9b060b226/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={snehadrita}
                      name='Snehadrita Seth'
                      role='Designer'
                      linkedIn='https://www.linkedin.com/in/snehadrita-seth-6240821a9/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={gunjan}
                      name='Gunjan Saha'
                      role='Designer'
                      linkedIn='https://www.linkedin.com/in/gunjansaha55/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={rohit}
                      name='Rohit Chakrabarti'
                      role='Designer & Marketing'
                      linkedIn='https://www.linkedin.com/in/rohit-chakrabarti-04b981230/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={purbali}
                      name='Purbali Sadhukhan'
                      role='Social Media Handler'
                      linkedIn='https://www.linkedin.com/in/purbali-sadhukhan-30591a235/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={snigdha}
                      name='Snigdha Kundu'
                      role='Designer & Social Media Handler'
                      linkedIn='https://www.linkedin.com/in/snigdha-kundu-2b4862254/'
                    />
                  </li>

                </ul>
              </div>
            </section>
    )
}

export default Team;