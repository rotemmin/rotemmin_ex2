'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './BabyStarPage.module.css';

const BabyStarPage = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const moveTimer = setTimeout(() => {
      setIsMoved(true);
    }, 1000);
    
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => {
      clearTimeout(moveTimer);
      clearTimeout(appearTimer);
    };
  }, []);

  const handleEnterClick = () => {
    // נווט לדף הלוגין
    document.querySelector(`.${styles.container}`)?.classList.add(styles.fadeOut);

    setTimeout(() => {
        router.push('/design/login');
      }, 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topEllipse} />
      <div className={styles.bottomEllipse} />
      
      <div className={styles.borderContainer}>
        <div className={`${styles.titleContainer} ${isMoved ? styles.moved : ''}`}>
          <h1 className={styles.title}>בייביסטאר</h1>
        </div>

        <div className={`${styles.illustrationContainer} ${isMoved ? styles.moved : ''}`}>
          <Image
            src="/images/constellation.svg"
            alt="Constellation illustration"
            width={300}
            height={154}
            priority
          />
        </div>

        <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
          תחזית שבועית להתנהגות הבייבי
        </p>

        <button 
          className={`${styles.enterButton} ${isVisible ? styles.visible : ''}`}
          onClick={handleEnterClick}
        >
          כניסה
        </button>
      </div>
    </div>
  );
};

export default BabyStarPage;