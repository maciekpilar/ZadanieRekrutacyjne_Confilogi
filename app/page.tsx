"use client";

import {
  ContactSection,
  DownloadSection,
  FAQSection,
  Features,
  HeroSection,
} from "./components";
import "./styles/globals.scss";
import styles from "./homePage.module.scss";
import Modal from "./components/shared/Modal/ModalPopup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <DownloadSection />
      <FAQSection />
      <ContactSection />
      <Modal />
    </>
  );
}
