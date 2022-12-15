import React from 'react';
import classNames from 'classnames/bind';
import useMediaQuery from '/src/hooks/useMediaQuery';
import AcademySection from './AcademySection';
import academyData from './academyData';
import Particles_AcadList_Dev_1 from '/src/assets/images/Particles_AcadList_Dev-1.svg';
import Particles_AcadList_Dev_2 from '/src/assets/images/Particles_AcadList_Dev-2.svg';
import Particles_AcadList_Test_1 from '/src/assets/images/Particles_AcadList_Test-1.svg';
import Particles_AcadList_Test_2 from '/src/assets/images/Particles_AcadList_Test-2.svg';
import Particles_AcadList_Front_1 from '/src/assets/images/Particles_AcadList_Front-1.svg';
import Particles_AcadList_Front_2 from '/src/assets/images/Particles_AcadList_Front-2.svg';
import Particles_AcadList_Kids_1 from '/src/assets/images/Particles_AcadList_Kids-1.svg';
import Particles_AcadList_Kids_2 from '/src/assets/images/Particles_AcadList_Kids-2.svg';
import Particles_AcadList_Kids_3 from '/src/assets/images/Particles_AcadList_Kids-3.svg';

import styles from './AcademyList.module';

const cn = classNames.bind(styles);

function AcadList() {
  const isDesktop = useMediaQuery('(min-width: 880px)');

  return (
    <>
      <div id="academy-list" className={cn('academy-list')}>
        <div className={cn(['academy-wrapper', 'academy-wrapper--dev'])}>
          <Particles_AcadList_Dev_1
            className={cn('academy-particles', 'academy-particles--dev-top')}
            aria-hidden="true"
          />
          <AcademySection data={academyData.developers} />
          <Particles_AcadList_Dev_2
            className={cn('academy-particles', 'academy-particles--dev-bot')}
            aria-hidden="true"
          />
        </div>

        <div className={cn(['academy-wrapper', 'academy-wrapper--test'])}>
          <Particles_AcadList_Test_1
            className={cn('academy-particles', 'academy-particles--test-top')}
            aria-hidden="true"
          />

          <AcademySection data={academyData.testers} />
          <Particles_AcadList_Test_2
            className={cn('academy-particles', 'academy-particles--test-bot')}
            aria-hidden="true"
          />
        </div>

        <div className={cn(['academy-wrapper', 'academy-wrapper--front'])}>
          <Particles_AcadList_Front_1
            className={cn('academy-particles', 'academy-particles--front-top')}
            aria-hidden="true"
          />
          <AcademySection data={academyData.frontEnd} />
          <Particles_AcadList_Front_2
            className={cn('academy-particles', 'academy-particles--front-bot')}
            aria-hidden="true"
          />
        </div>

        <div className={cn(['academy-wrapper', 'academy-wrapper--kids'])}>
          <Particles_AcadList_Kids_1
            className={cn('academy-particles', 'academy-particles--kids-top')}
            aria-hidden="true"
          />
          <AcademySection data={academyData.kids} />
          {isDesktop ? (
            <Particles_AcadList_Kids_2
              className={cn('academy-particles', 'academy-particles--kids-bot')}
              aria-hidden="true"
            />
          ) : (
            <Particles_AcadList_Kids_3
              className={cn('academy-particles', 'academy-particles--kids-bot')}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <div className={cn('demo-container')}></div>
    </>
  );
}

export default AcadList;
