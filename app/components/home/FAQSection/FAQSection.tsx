import styles from "./FAQSection.module.scss";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../../shared/Button/Button";
import { FAQData } from "../../../../helpers/FAQData";

const FAQSection = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Accordion handleChange
  const handleChange: any =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.faqHeadingWrapper}>
        <h2 className={styles.faqHeader}>Frequently Asked Questions</h2>
        <p className={styles.faqParagraph}>
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>
      {FAQData.map((e) => (
        <Accordion
          key={e._id}
          expanded={expanded === e._id}
          onChange={handleChange(e._id)}
          className={`${styles.accordionElement} ${
            expanded === e._id ? styles.accordionElementActive : ""
          }`}
        >
          <AccordionSummary
            style={{ padding: 8 }}
            expandIcon={
              <ExpandMoreIcon
                className={`${
                  expanded === e._id
                    ? styles.accordionIconActive
                    : styles.accordionIcon
                }`}
              />
            }
          >
            <Typography className={styles.accordionHeader}>
              {e.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDescriptionBox}>
            <Typography className={styles.accordionDescription}>
              {e.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <div className={styles.faqButtonBox}>
        <Button buttonText="More Info" variant="primaryButton" />
      </div>
    </div>
  );
};

export default FAQSection;
