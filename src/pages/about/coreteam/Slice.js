import sliceAppLarge from 'assets/team.jpg';
import sliceAppPlaceholder from 'assets/profile-placeholder.jpg';
import sliceApp from 'assets/team.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import dika from 'assets/dika.jpg';
import dikalarge from 'assets/dika.jpg';
import igun from 'assets/igun.jpg';
import igunlarge from 'assets/igun.jpg';
import karot from 'assets/karot.jpg';
import karotlarge from 'assets/karot.jpg';
import lae from 'assets/lae.jpg';
import laelarge from 'assets/lae.jpg';
import ijal from 'assets/ijal.jpg';
import ijallarge from 'assets/ijal.jpg';
import megamin from 'assets/megamin.jpg';
import megaminlarge from 'assets/megamin.jpg';
import eve from 'assets/eve.jpg';
import evelarge from 'assets/eve.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionColumns3,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Meet Our Core Team';
const description = 'Exsaverse Run by Some Great Core Team';

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} />
        <ProjectSectionColumns3 className={styles.columns}>
          <ProjectImage
            srcSet={[ijal, ijallarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Maanxxx - Founder"
            linktwt="https://twitter.com/ijalhasibuan"
            usernametwt=""
            linkdc="https://discord.com/users/1063435885347082341"
            usernamedc=""
          />
          <ProjectImage
            srcSet={[dika, dikalarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Dika - Community Builder"
            linktwt="https://twitter.com/ExsaDika"
            usernametwt=""
            linkdc="https://discord.com/users/483670800252010500"
            usernamedc=""
          />
          <ProjectImage
            srcSet={[igun, igunlarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Igun - Bot Developer"
            linktwt="https://twitter.com/itsIgun"
            usernametwt=""
            linkdc="https://discord.com/users/1063353910040985671"
            usernamedc=""
          />
        </ProjectSectionColumns3>
        <ProjectSectionColumns className={styles.columns}>
          <ProjectImage
            srcSet={[eve, evelarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text=" Eve - Web Developer"
            linktwt="https://twitter.com/evetixx"
            usernametwt=""
            linkdc="https://discord.com/users/828366966196273243"
            usernamedc=""
          />
          <ProjectImage
            srcSet={[megamin, megaminlarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Megamin - Core Team"
            linktwt="https://twitter.com/megamin666"
            usernametwt=""
            linkdc="https://discord.com/users/536201144347787264"
            usernamedc=""
          />
          <ProjectImage
            srcSet={[karot, karotlarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Karot - Core Team"
            linktwt="https://twitter.com/mahesayoms"
            usernametwt=""
            linkdc="https://discord.com/users/496960620428525568"
            usernamedc=""
          />
          <ProjectImage
            srcSet={[lae, laelarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Lae - Core Team"
            linktwt="https://twitter.com/madsinri"
            usernametwt=""
            linkdc="https://discord.com/users/722313372175171657"
            usernamedc=""
          />
        </ProjectSectionColumns>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
