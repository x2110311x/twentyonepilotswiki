import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: 'Trench',
    link: '/docs/trench',
    imageUrlDark: 'img/dema-light.png',
    imageUrlLight: 'img/dema.png',
    description: (
      <>
        A black-and-white first glance to the Sacred Municipality of DEMA and its bishops through the eyes of Clancy and his violation code. Unveil the story of the Banditos, themed around the band's 2018 album TRENCH.
      </>
    ),
  },
  {
    title: 'Scaled and Icy',
    link: '/docs/scaledandicy/04-02-21-terminating-files',
    imageUrlDark: 'img/trashdragon.png',
    imageUrlLight: 'img/trashdragon.png',
    description: (
      <>
        Keep up with the band’s vibrant return, unlike anything they’ve done before. Their 2021 album comes along with a mysterious Livestream Experience hosted by DMA ORG and Good Day Dema. “It all happens on May 21st.”
      </>
    ),
  },
  {
    title: 'Clancy',
    link: '/docs/clancy',
    imageUrlDark: 'img/clancyeralogo.png',
    imageUrlLight: 'img/clancyeralogo.png',
    description: (
      <>
        Clancy, the band's 7th album, is set to finish out the epic saga of Clancy's battle against the bishops of DEMA. The album was released on May 24th, 2024.
      </>
    ),
  },
];

function Feature({link, imageUrlDark, imageUrlLight, title, description}) {
  const imgUrlDark = useBaseUrl(imageUrlDark);
  const imgUrlLight = useBaseUrl(imageUrlLight);
  const { isDarkTheme } = useColorMode();
  return (
      <div className={clsx('col col--4', styles.feature)}>
        {imgUrlDark && (
          <div className="text--center featureimg ">
            <a class='lore-module-link ' href={link}>
              <img className={styles.featureImage} src={isDarkTheme ? imgUrlDark : imgUrlLight} alt={title} />
            </a>
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="We do the clikking for the clikkies">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.hero__title)}>{siteConfig.title}</h1>
          <p className={clsx("hero__subtitle", styles.hero__subtitle)}>Hosted by <strong>Discord Clique</strong></p>
        </div>
      </header>
      <main>
        <section class="intro col">
          <div className="container">
            <h3>Welcome! </h3>
            <p>
            twentyonepilots.wiki is an online, community-hosted lore repository of the band Twenty One Pilots. The Grammy-winner, alternative rock duo from Columbus, Ohio is famous for weaving puzzling backgrounds for their records, and this hub was created to help the fans navigate through their cryptic works. This site is hosted and updated by the Discord Clique, a fandom community localized mainly on the group-chatting platform Discord. Make sure to join us!
            <br></br>
            <br></br>
            Use the bookmarks below to navigate through the website. If you have any questions, suggestions or bug reports, make sure to contact us in our own <a class='noDecoLink' href='https://discord.gg/twentyonepilots'> server </a> or through our official BlueSky <a class='noDecoLink' href="https://bsky.app/profile/discordclique.bsky.social" >@discordclique.bsky.social</a>. Thank you for visiting and have fun! "We do the clicking for the clikkies."
            </p>
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
