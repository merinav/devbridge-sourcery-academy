import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { routes } from '/src/routes/';
import Button from '/src/components/Button/Button';
import Image404Error from '/src/assets/images/Image_404_Error.svg';
import styles from './NotFound.module';

const cn = classNames.bind(styles);

function NotFound() {
  useTheme();

  return (
    <div className={cn('not-found-wrapper')}>
      <Image404Error className={cn('image')} />
      <h1 className={cn('heading')}>Sorry, that page can&apos;t be found.</h1>
      <Button to={routes.home}>Go to home page</Button>
    </div>
  );
}

export default NotFound;
