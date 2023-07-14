import { useState, useContext } from 'react'
import { data } from './data'
import { Accordion, Container, SummaryDetails, SummarySection } from './faqStyles'
import Typography from '@mui/material/Typography'
import { ThemeContext } from '../../context/ThemeContext'

const FAQ = () => {
  const emailRegex = /([\w.-]+@[\w-]+\.[\w.-]+)/gi
  const urlRegex = /(https?:\/\/\S+)/gi
  const { darkMode } = useContext(ThemeContext)

  const renderAnswer = (ans) => {
    const links = ans.split(urlRegex)
    const emails = ans.split(emailRegex)

    const isUrl = (link) => urlRegex.test(link)

    if (links.length > 1 && isUrl(links[1])) {
      return links.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <a className={'ac_link'} key={index} href={part} target='_blank' rel='noopener noreferrer'>
              {part}
            </a>
          )
        }
        return part
      })
    } else if (emails.length > 1) {
      return emails.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <a className={'ac_link'} key={index} href={`mailto:${part}`}>
              &nbsp;&nbsp;{part}
            </a>
          )
        }
        return part
      })
    } else {
      return ans
    }
  }

  const [expandPanel, setExpandPanel] = useState(false)

  return (
    <section id='faq' className={'section faq'} style={{ filter: darkMode ? 'invert(0.92)' : 'invert(0)' }}>
      <Container>
        <h3 className='h3 section-title' data-aos='fade-right' style={{ color: 'var(--gray-web)', marginBottom: '25px' }}>
          Frequently Asked Questions
        </h3>
        {data.map((item) => (
          <Accordion
            key={item.id}
            expand={`panel-${item.id}`}
            expandPanel={expandPanel}
            setExpandPanel={setExpandPanel}
          >
            <SummarySection>
              <Typography variant={'h6'}>{item.q}</Typography>
            </SummarySection>
            <SummaryDetails>
              Ans: {item.a !== undefined && <>{renderAnswer(item.a)}</>}
            </SummaryDetails>
          </Accordion>
        ))}
      </Container>
    </section>
  )
}

export default FAQ