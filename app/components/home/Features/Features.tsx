"use client";
import { useState } from "react";
import styles from "./Features.module.scss";
import Image from "next/image";
import Button from "../../shared/Button/Button";
import { featuresData } from "../../../../helpers/featuresData";

const Features = () => {
  const [activeCard, setActiveCard] = useState(featuresData[0]);

  const handleFeatureChange = (featureId: any) => {
    const feature = featuresData.find((f) => f._id === featureId);
    if (feature) {
      setActiveCard(feature);
    }
  };

  return (
    <section id="features" className={styles.featureWrapper}>
      <div className={`shapeSkewedRight ${styles.shapeWrapper}`}></div>

      <div className={styles.featureHeadingWrapper}>
        <h2 className={styles.featureHeader}>Features</h2>
        <p className={styles.featureParagraph}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <div className={styles.featureTabs}>
          {featuresData.map((feature) => (
            <div
              key={feature._id}
              onClick={() => handleFeatureChange(feature._id)}
              className={`${styles.featureTab} ${
                activeCard === feature ? styles.featureActiveTab : ""
              }`}
            >
              {feature.tabTitle}
              <div
                className={
                  activeCard === feature
                    ? styles.featureActiveTabDecor
                    : styles.featureTabDecor
                }
              ></div>
            </div>
          ))}
        </div>
        <div className={styles.featureTabsBox}>
          <div className={styles.featureImageBox}>
            <div className={styles.featureShapeImage}>
              <Image
                src={activeCard.img}
                alt={activeCard.title}
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className={styles.featureActiveTabBox}>
            <h2 className={styles.featureTabHeader}>{activeCard.title}</h2>
            <p className={styles.featureTabParagraph}>
              {activeCard.description}
            </p>
            <div className={styles.buttonBox}>
              <Button buttonText="More Info" variant="primaryButton" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
