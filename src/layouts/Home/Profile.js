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
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'components/ThemeProvider';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import { Icon } from 'components/Icon';
import { cssProps } from 'utils/style';
import { useInterval, usePrevious } from 'hooks';

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
  const theme = useTheme();
  const ProfileImage = [profileImg, profileImg2, profileImg3];
  const pictext = ['Profile 1', 'Profile 2', 'Profile 3'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const [currentProfileImage, setCurrentProfileImage] = useState(
    ProfileImage[currentIndex]
  );
  const [currentprofiletext, setcurrentprofiletextindex] = useState(
    pictext[currentIndex]
  );
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const socialLinks = [
    {
      label: 'Twitter',
      url: 'https://twitter.com/exsaverse',
      icon: 'twitter',
    },
    {
      label: 'Discord',
      url: 'https://discord.gg/exsaverse',
      icon: 'twitter',
    },
    {
      label: 'Github',
      url: 'https://github.com/kdelia12',
      icon: 'twitter',
    },
  ];
  const [currentsociallink, setcurrentsociallink] = useState(socialLinks[currentIndex]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentProfileImage(ProfileImage[currentIndex]);
      setcurrentprofiletextindex(pictext[currentIndex]);
      setcurrentsociallink(socialLinks[currentIndex]);
      // setcurrentprofiletext(pictext[currentIndex]);
      setCurrentIndex((currentIndex + 1) % ProfileImage.length);
    }, 5000);
  }, [currentIndex]);
  // useInterval(
  //   () => {
  //     const index = (currentprofiletextindex + 1) % pictext.length;
  //     setcurrentprofiletextindex(index);
  //   },
  //   5000,
  //   theme.themeId
  // );
  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setcurrentprofiletextindex(0);
    }
  }, [theme.themeId, prevTheme]);
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
                  Our Partnership
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
                          aria-hidden
                          className={styles.word}
                          data-plus={true}
                          data-status={status}
                          placeholder={profileImgPlaceholder}
                          src={item}
                          alt="Profile"
                        />
                      )}
                    </Transition>
                  ))}
                </AnimatePresence>
              </div>
              <div className={styles.row} component="span">
                <AnimatePresence>
                  {pictext.map(item => (
                    <Transition
                      unmount
                      in={item === currentprofiletext}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={item}
                    >
                      {(visible, status) => (
                        <span
                          aria-hidden
                          className={styles.word}
                          data-plus={true}
                          data-status={status}
                          style={cssProps({ delay: tokens.base.durationL })}
                        >
                          {item}
                          {/* {currentsociallink(({ label, url, icon }) => (
                            <Transition
                              unmount
                              in={item === currentsociallink}
                              timeout={{ enter: 3000, exit: 2000 }}
                              key={item}
                            >
                              {(visible, status) => (
                                <a
                                  key={label}
                                  data-navbar-item={desktop || undefined}
                                  className={styles.navIconLink}
                                  aria-label={label}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Icon className={styles.navIcon} icon={icon} />
                                </a>
                              )}
                            </Transition>
                          ))} */}
                        </span>
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
