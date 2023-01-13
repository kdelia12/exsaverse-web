import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import profileImg2 from 'assets/profile2.jpg';
import profileImg3 from 'assets/profile3.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import styles2 from './Intro.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      exsaverse is a community of individuals who are passionate about the development,
      adoption, and use of cryptocurrency and decentralized finance platforms and
      technologies. Our focus is on the various aspects of DeFi such as yield farming,
      lending, borrowing, and insurance.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      At exsaverse, we believe in building a strong and inclusive community where everyone
      can contribute their unique skills and knowledge. Whether you're a beginner or an
      experienced professional, you're welcome to join us on our journey towards a
      decentralized financial future.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const ProfileImage = [profileImg, profileImg2, profileImg3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProfileImage, setCurrentProfileImage] = useState(
    ProfileImage[currentIndex]
  );
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  useEffect(() => {
    setTimeout(() => {
      setCurrentProfileImage(ProfileImage[currentIndex]);
      setCurrentIndex((currentIndex + 1) % ProfileImage.length);
    }, 5000);
  }, [currentIndex]);

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="discord"
              >
                Join our Discord!
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Us
                </div>
              </div>
              <div className={styles.image}>
                <AnimatePresence>
                  {ProfileImage.map(item => (
                    <Transition
                      unmount
                      in={item === currentProfileImage}
                      timeout={{ enter: 2000, exit: 0 }}
                      key={item}
                    >
                      {(visible, status) => (
                        <Image
                          reveal
                          delay={100}
                          placeholder={profileImgPlaceholder}
                          src={item}
                          alt="Profile"
                        />
                      )}
                    </Transition>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
