import Image from "next/image";
import Button from "../../shared/Button/Button";
import styles from "./DownloadSection.module.scss";
import { cardsData } from "../../../../helpers/cardsData";

const DownloadSection = () => {
  return (
    <section id="pricing" className={styles.downoladWrapper}>
      <div className={styles.downloadHeadingWrapper}>
        <h2 className={styles.downloadHeader}>Download the extension</h2>
        <p className={styles.downloadParagraph}>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favorite you&apos;d like us to prioritize.
        </p>
      </div>
      <div className={styles.downloadCardsWrapper}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.downloadCard}>
            <div className={styles.downloadCardImage}>
              <Image
                src={card.icon}
                alt={`${card.title} Logo`}
                width={0}
                height={0}
              />
            </div>
            <div className={styles.downloadCardTitle}>Add to {card.title}</div>
            <div className={styles.downloadCardDescription}>
              Minimum version {card.version}
            </div>
            <div className={styles.downloadCardDots}>
              <Image
                src="/assets/bg-dots.svg"
                alt="Dots"
                width={0}
                height={0}
              />
            </div>
            <div className={styles.downloadCardButton}>
              <Button
                buttonText="Add & Install Extension"
                variant="primaryButton"
                fullWidth
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadSection;
