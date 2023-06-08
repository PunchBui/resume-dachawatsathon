import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import careerData from '../data/careerSummary'
import skills from '../data/skills'
import contacts from '../data/contacts'
import { Header } from './components/Header'
import { Section } from './constants'
import { About } from './container/About'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dachawatsathon</title>
        <meta name="description" content="Dachawatsathon resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div className={styles.container}>

        <main className={styles.main}>
          <About/>

          <section id={Section.Career} className={styles.section}>
            <div className={styles["career-container"]}>
              <h1 className={styles["career-title"]}>
                Career Summary
              </h1>
              
              {careerData.map((_careerData, index) => (
                <>
                  <h2 className={styles["career-date"]}>
                    {_careerData.date}
                  </h2>
                  <h3 className={styles["career-date"]}>
                    {_careerData.title}
                  </h3>
                  <h4 className={styles["career-date"]}>
                    {_careerData.company}
                  </h4>
                  <ul>
                    {_careerData.tasks.map((task, index) => (
                      <li key={index}>
                        {task}
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          </section>

          <section id={Section.Skills} className={styles.section}>
            <h1 className={styles["skill-title"]}>
              Skills
            </h1>
            
            {skills.map((skill) => (
              <>
                <h2 className={styles["career-date"]}>
                  {skill.category}
                </h2>
                <p className={styles["skill-detail"]}>
                  {skill.detail}
                </p>
              </>
            ))}
          </section>
          
        </main>
      </div>
    </>
  )
}

export default Home
