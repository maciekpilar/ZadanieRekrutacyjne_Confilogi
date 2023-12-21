import Image from "next/image";
import styles from "./HeroSection.module.scss";
import Button from "../../shared/Button/Button";

const HeroSection = () => {
  return (
    <section className={styles.heroBox}>
      <div className={`shapeSkewedLeft ${styles.shapeWrapper}`}></div>
      <div className={styles.heroWrapper}>
        <div className={styles.heroShapeImage}>
          <Image
            src="/assets/illustration-hero.svg"
            alt="App Skeleton"
            width={0}
            height={0}
          />
        </div>
        <div className={styles.heroSizer}>
          <div className={styles.heroTextWrapper}>
            <h1 className={styles.heroHeader}>A Simple Bookmark Manager</h1>
            <p className={styles.heroParagraph}>
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className={styles.heroButtonWrapper}>
            <Button variant="primaryButton" buttonText="Get it on Chrome" />
            <Button variant="outlinedButton" buttonText="Get it on Firefox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
