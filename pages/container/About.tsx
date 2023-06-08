import React from "react";
import { Section } from "../constants";
import contacts from "../../data/contacts";
import aboutStyles from "../../styles/About.module.scss";
import styles from "../../styles/Home.module.scss";
import { Card } from "../components/Card";
import { ArrowDownIcon } from "../../assets/ArrowDownIcon";

export const About: React.VFC = () => {
  const name = "Dachawatsathon Kunweeroj";
  const title = "Fullstack Software Developer";
  const description =
    `" I'm a fullstack software engineer with robust problem-solving skills, fast learner, responsible, eager to learn new technologies. "`;

  return (
    <section id={Section.About} className={styles.section}>
      <h1 className={styles.title}>{name}</h1>
      <h2 className={styles["sub-title"]}>{title}</h2>
      <p className={aboutStyles.description}>{description}</p>
      <div className={aboutStyles.descriptionContainer}>
        {contacts.map((contact, index) => (
          <a href={contact.link} key={index} target="blank">
            <Card style={aboutStyles.card}>
              <div className={styles["contact-row"]}>
                <p className={aboutStyles.contactLogo}>{contact.logo}</p>
                <p>{contact.detail}</p>
              </div>
            </Card>
            </a>
        ))}
      </div>
      <a href={`#${Section.Career}`}>
        <Card style={aboutStyles.learnMoreContainer}>
          <>
            <p className={aboutStyles.learnMoreText}>Want to learn more?</p>
            <div className={aboutStyles.moveUpDown}>
              <ArrowDownIcon size={64}/>
            </div>
          </>
        </Card>
      </a>
    </section>
  );
};
