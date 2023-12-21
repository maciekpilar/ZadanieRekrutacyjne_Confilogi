import Image from "next/image";
import styles from "./Modal.module.scss";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const Modal = ({ show, onClose }: any) => {
  if (!show) return null;

  return (
    <div className={styles.modalBox}>
      <div className={styles.modalCloseButton}>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.featureTabsBox}>
        <div className={`shapeModal ${styles.shapeWrapper}`}></div>
        <div className={styles.featureImageBox}>
          <div className={styles.featureShapeImage}>
            <Image
              src="/assets/illustration-features-tab-2.svg"
              alt=""
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className={styles.featureActiveTabBox}>
          <h2 className={styles.featureTabHeader}>Intelligent search</h2>
          <p className={styles.featureTabParagraph}>
            Our powerful search feature will help you find saved sites in on
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <div className={styles.buttonBox}>
            <Button buttonText="More Info" variant="primaryButton" fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
};

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpened, setModalOpened] = useState(false); // flag to track if modal has been opened

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!modalOpened) {
        // Check if the modal hasn't been opened yet
        setShowModal(true);
        setModalOpened(true); // Set the flag to indicate the modal has been opened
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [modalOpened]);

  const handleMouseEnter = () => {
    if (!modalOpened) {
      // Open the modal only if it hasn't been opened before
      setShowModal(true);
      setModalOpened(true); // Set the flag to indicate the modal has been opened
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} className={styles.modalActiveSpace}>
      <Modal show={showModal} onClose={handleClose} />
    </div>
  );
};

export default MyComponent;
