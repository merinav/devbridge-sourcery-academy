import React from 'react';
import PropTypes from 'prop-types';

function PageLayout({ children, layoutName }) {
  return <div className={`layout__${layoutName}`}>{children}</div>;
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutName: PropTypes.string,
};

export default PageLayout;
