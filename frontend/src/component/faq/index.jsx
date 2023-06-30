import React from 'react';
import {data} from './data';
import {Accordion, Container, SummeryDetails, SummerySection} from './styles';
import Typography from '@mui/material/Typography';

const FAQ = () => {
  const emailRegex = /([\w.-]+@[\w-]+\.[\w.-]+)/gi;
  const urlRegex = /(https?:\/\/\S+)/gi;

  function renderAnswer(ans) {
    const links = ans.split(urlRegex);
    const emails = ans.split(emailRegex);

    const isUrl = (link) => urlRegex.test(link);

    if (links.length > 1 && isUrl(links[1])) {
      return links.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <a className={"ac_link"} key={index} href={part} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          );
        }
        return part;
      });
    } else if (emails.length > 1) {
      return emails.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <a className={"ac_link"} key={index} href={`mailto:${part}`}>
              {part}
            </a>
          );
        }
        return part;
      });
    } else {
      return ans;
    }
  }

  return (
    <section id="faq" className={"section faq"}>
      <Container>
        <h2 className="h2 section-title" data-aos="fade-right">Frequently Asked Questions</h2>
        {data.map((item) => (
          <Accordion key={item.id}>
            <SummerySection>
              <Typography variant={"h6"}>{item.q}</Typography>
            </SummerySection>
            <SummeryDetails>
              Ans: {item.a !== undefined && <>{renderAnswer(item.a)}</>}
            </SummeryDetails>
          </Accordion>
        ))}
      </Container>
    </section>
  );
};

export default FAQ;