import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { SlArrowDown } from "react-icons/sl";
import styles from './AcoordionSecion.module.css';

const AccordionSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.faq}>
      <h2 className={styles.faqtext}>FAQs</h2>
      <div className={styles.accordioncontainer}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className={styles.accordion}
        >
          <AccordionSummary
            expandIcon={<SlArrowDown style={{ color: '#34C94B' }}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.accordionsummary}
          >
            <p className={styles.accordionsummarytext}>Is QTify free to use?</p>
          </AccordionSummary>

          <AccordionDetails>
            <p className={styles.accordiondetailstext}>
              Yes! It is 100% free, and has 0% ads!
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className={styles.accordion}
        >
          <AccordionSummary
            expandIcon={<SlArrowDown style={{ color: '#34C94B' }}/>}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className={styles.accordionsummary}
          >
            <p className={styles.accordionsummarytext}>
              Can I download and listen to songs offline?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordiondetailstext}>
              Sorry, unfortunately we dont provide the service to download any
              songs.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionSection;