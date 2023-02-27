import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.png';
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
import testi1 from 'assets/testi1.png';
import testi2 from 'assets/testi2.png';
import testi3 from 'assets/testi3.png';
import testi4 from 'assets/testi4.png';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      exsaverse is safe marketplace for buying and selling any whitelist. We always put
      transparency and security first. We are a community of NFT collectors, artists, and
      developers who are passionate about the NFT space.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      At exsaverse, after being a customer, you can join the dao, which is have so many
      benefits and fun. We often provide some whitelist spot, in fcfs or a raffle for the
      community. We also have a giveaway for the community. Lets have fun
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const theme = useTheme();
  const ProfileImage = [testi1, testi2, testi3, testi4];
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
                  Testimonial
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
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
