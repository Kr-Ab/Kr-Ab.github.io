import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skills.module.css';
import useSectionVisible from './useSectionVisible';
import TechCarousel from './TechCarousel';
import { getTechIcon } from '../utils/techIcons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function SkillsCategoryCard({ group, skills }) {
  const cardRef = useSectionVisible(styles.visible);
  return (
    <div ref={cardRef} className={styles.skillsCategoryCard} data-group={group}>
      <div className={styles.skillsCategoryTitle}>{group}</div>
      <TechCarousel
        items={skills}
        settings={carouselSettings}
        renderItem={(skill, j) => {
          const icon = getTechIcon(skill);
          return (
            <div className={styles.skillsCategoryItem} key={j}>
              {icon && (
                <img
                  src={icon}
                  alt={skill + ' icon'}
                  className={styles.skillsCategoryIcon}
                  width={28}
                  height={28}
                  loading="lazy"
                  aria-hidden="true"
                />
              )}
              <span className={styles.skillsCategoryLabel}>{skill}</span>
            </div>
          );
        }}
      />
    </div>
  );
}

SkillsCategoryCard.propTypes = {
  group: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <h3 className={styles.skillsHeading}>Skills & Technologies</h3>
      <div className={styles.skillsCategoryGrid}>
        {Object.keys(skills).map((group, i) => (
          <SkillsCategoryCard group={group} skills={skills[group]} key={i} />
        ))}
      </div>
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
