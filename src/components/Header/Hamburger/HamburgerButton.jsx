import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
//import Sidebar from '../Sidebar/Sidebar';
import Icon_hamburger_x from '../../../assets/icons/Icon_hamburger_x.svg';
import Icon_hamburger from '../../../assets/icons/Icon_hamburger.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = (props) => {
  return (
    <>
      {props ? (
        <button className={cn('hamburger')}>
          <Icon_hamburger />
        </button>
      ) : (
        <button className={cn('hamburger')}>
          <Icon_hamburger_x />
        </button>
      )}
    </>
  );
};

HamburgerButton.propTypes = {
  props: PropTypes.bool,
};

export default HamburgerButton;

// const HamburgerButton = () => {
//   const [status, setisOpen] = useState(false);
//   return (
//     <>
//       {status ? (
//         <>
//           <button onClick={() => setisOpen(false)} className={cn('hamburger')}>
//             <Icon_hamburger_closed />
//           </button>{' '}
//         </>
//       ) : (
//         <button onClick={() => setisOpen(true)} className={cn('hamburger')}>
//           <Icon_hamburger_open />
//         </button>
//       )}
//     </>
//   );
// };

// // HamburgerButton.propTypes = {
// //   isOpen: PropTypes.bool,
// //   onClick: PropTypes.any,
// // };;

// export default HamburgerButton;
