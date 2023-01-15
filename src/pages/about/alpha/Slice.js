import sliceAppLarge from 'assets/team.jpg';
import sliceAppPlaceholder from 'assets/profile-placeholder.jpg';
import sliceApp from 'assets/team.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.png';
import sliceBackground from 'assets/slice-background.jpg';
import solsensei from 'assets/solsensei.png';
import solsenseilarge from 'assets/solsensei.png';
import dindascape from 'assets/dindascape.jpg';
import dindascapelarge from 'assets/dindascape.jpg';
import qihsol from 'assets/qihsol.jpg';
import qihsollarge from 'assets/qihsol.jpg';
import shiver from 'assets/shiver.jpg';
import shiverlarge from 'assets/shiver.jpg';
import rm from 'assets/RM.jpg';
import rmlarge from 'assets/RM.jpg';
import rue from 'assets/rue.jpg';
import ruelarge from 'assets/rue.jpg';
import mrxpert from 'assets/mrxpert.jpg';
import mrxpertlarge from 'assets/mrxpert.jpg';
import pinya from 'assets/pinya.jpg';
import pinyalarge from 'assets/pinya.jpg';
import oxplode from 'assets/0xplode.jpg';
import oxplodelarge from 'assets/0xplode.jpg';
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

const title = 'Meet Our Alpha Hunters';
const description = 'Exsaverse Run by Some Great Alpha Hunters';

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
            srcSet={[qihsol, qihsollarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="QihSOL"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
          <ProjectImage
            srcSet={[mrxpert, mrxpertlarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="MrXpert"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
          <ProjectImage
            srcSet={[solsensei, solsenseilarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="sol sensei"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
        </ProjectSectionColumns3>
        <ProjectSectionColumns3 className={styles.columns}>
          <ProjectImage
            srcSet={[dindascape, dindascapelarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="dindascape"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
          <ProjectImage
            srcSet={[shiver, shiverlarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text=" ShVrn"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
          <ProjectImage
            srcSet={[rm, rmlarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="RM"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
        </ProjectSectionColumns3>
        <ProjectSectionColumns3 className={styles.columns}>
          <ProjectImage
            srcSet={[rue, ruelarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Rue"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
          <ProjectImage
            srcSet={[pinya, pinyalarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="Pinya"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
          <ProjectImage
            srcSet={[oxplode, oxplodelarge]}
            placeholder={sliceAppPlaceholder}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            grid="4 / 5"
            text="0xplode"
            linktwt=""
            usernametwt=""
            linkdc=""
            usernamedc=""
          />
        </ProjectSectionColumns3>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
