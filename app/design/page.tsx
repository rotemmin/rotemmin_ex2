import React from 'react';
import styles from './page.module.css';
import { Ellipse } from '../../lib/design/Ellipse.tsx';

const DesignPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Ellipse />
        <Ellipse className={styles.ellipseTop} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>ברוכים הבאים</h1>
      </div>
    </div>
  );
};

export default DesignPage;
