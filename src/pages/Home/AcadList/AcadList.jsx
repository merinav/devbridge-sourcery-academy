import React from 'react';
import useMediaQuery from '/src/hooks/useMediaQuery';
import classNames from 'classnames/bind';

import AcadListSection from './AcadListSection';

import Img_Developers from '/src/assets/images/Image_Academy_Developers.svg';
import Img_Testers from '/src/assets/images/Image_Academy_Testers.svg';
import Img_FrontEnd from '/src/assets/images/Image_Academy_Front_End.svg';
import Img_Kids from '/src/assets/images/Image_Academy_Kids.svg';

import Particles_AcadList_Dev_1 from '/src/assets/images/Particles_AcadList_Dev-1.svg';
import Particles_AcadList_Dev_2 from '/src/assets/images/Particles_AcadList_Dev-2.svg';
import Particles_AcadList_Test_1 from '/src/assets/images/Particles_AcadList_Test-1.svg';
import Particles_AcadList_Test_2 from '/src/assets/images/Particles_AcadList_Test-2.svg';
import Particles_AcadList_Front_1 from '/src/assets/images/Particles_AcadList_Front-1.svg';
import Particles_AcadList_Front_2 from '/src/assets/images/Particles_AcadList_Front-2.svg';
import Particles_AcadList_Kids_1 from '/src/assets/images/Particles_AcadList_Kids-1.svg';
import Particles_AcadList_Kids_2 from '/src/assets/images/Particles_AcadList_Kids-2.svg';
import Particles_AcadList_Kids_3 from '/src/assets/images/Particles_AcadList_Kids-3.svg';

// import Path_Testers from '/src/assets/images/Path_Academy_Testers_2.svg';
// import Path_Kids from '/src/assets/images/Path_Academy_Kids_2.svg';

import Path_Developers from '/src/assets/images/Path_Academy_Developers_1.svg';
import Path_Testers from '/src/assets/images/Path_Academy_Testers_1.svg';
import Path_Kids from '/src/assets/images/Path_Academy_Kids_1.svg';

import styles from './AcadList.module';

const cn = classNames.bind(styles);

const academyData = {
  developers: {
    id: 'dev',
    title: 'Sourcery for Developers',
    paragraph:
      'A free of charge three-month cutting-edge technology course, available in the Spring and Fall of each year. Students are invited to the Devbridge in Kaunas and Vilnius offices to attend lectures and create custom projects with the help of software development professionals.',
    img: Img_Developers,
    svgPath: Path_Developers,
    invert: false,
  },
  testers: {
    id: 'test',
    title: 'Sourcery for Testers',
    paragraph:
      'Top-notch studies for the future Test Engineers. Students join the Devbridge team as a paid employee for the Academy period (two months) to learn and work. Ones who finish the Academy successfully are invited to continue employment on full time.',
    img: Img_Testers,
    svgPath: Path_Testers,
    invert: true,
  },
  frontEnd: {
    id: 'front',
    title: 'Sourcery for Front-End',
    paragraph:
      'Start your career in software development with the intense program at Sourcery for Front-End Developers. Complete the admission and enter our free of charge two-month academy this autumn in Vilnius to learn from our top specialists.',
    img: Img_FrontEnd,
    svgPath: null,
    invert: true,
  },
  kids: {
    id: 'kids',
    title: 'Sourcery for Kids',
    paragraph:
      'Sourcery for Kids seeks to educate kids giving them opportunity to learn and apply technological product development skills. For the entire academic year, the children will study key aspects of programming, from logical concepts and functions, through to variables, sequences, coordinates, and movement.',
    img: Img_Kids,
    svgPath: Path_Kids,
    invert: false,
  },
};

function AcadList() {
  const isDesktop = useMediaQuery('(min-width: 880px)');

  return (
    <>
      <div id="academy-list" className={cn('academy-list')}>
        <div className={cn(['academy-wrapper', 'academy-wrapper--dev'])}>
          <Particles_AcadList_Dev_1
            className={cn('academy-particles', 'academy-particles--dev-top')}
          />
          <AcadListSection data={academyData.developers} />
          <Particles_AcadList_Dev_2
            className={cn('academy-particles', 'academy-particles--dev-bot')}
          />
        </div>

        <div className={cn(['academy-wrapper', 'academy-wrapper--test'])}>
          <Particles_AcadList_Test_1
            className={cn('academy-particles', 'academy-particles--test-top')}
          />

          <AcadListSection data={academyData.testers} />
          <Particles_AcadList_Test_2
            className={cn('academy-particles', 'academy-particles--test-bot')}
          />
        </div>

        <div className={cn(['academy-wrapper', 'academy-wrapper--front'])}>
          <Particles_AcadList_Front_1
            className={cn('academy-particles', 'academy-particles--front-top')}
          />
          <AcadListSection data={academyData.frontEnd} />
          <Particles_AcadList_Front_2
            className={cn('academy-particles', 'academy-particles--front-bot')}
          />
        </div>

        <div className={cn(['academy-wrapper', 'academy-wrapper--kids'])}>
          <Particles_AcadList_Kids_1
            className={cn('academy-particles', 'academy-particles--kids-top')}
          />
          <AcadListSection data={academyData.kids} />
          {isDesktop ? (
            <Particles_AcadList_Kids_2
              className={cn('academy-particles', 'academy-particles--kids-bot')}
            />
          ) : (
            <Particles_AcadList_Kids_3
              className={cn('academy-particles', 'academy-particles--kids-bot')}
            />
          )}
        </div>
      </div>
      <div className={cn('demo-container')}></div>
    </>
  );
}

export default AcadList;
