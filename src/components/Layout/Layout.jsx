import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import Card from '~/components/Card';
import styles from './Layout.module';

const cn = classNames.bind(styles);

function Layout({ children }) {
  return (
    <div className={cn('layout')}>
      <Header />
      <main className={cn('layout__main')}>
        {/*TODO: Remove after testing*/}
        <Card color="red">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pharetra odio tortor, eget dapibus tellus euismod sed. Aliquam
            lobortis nibh magna, in auctor justo aliquet ultrices.
          </p>
        </Card>
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
