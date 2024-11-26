'use client';

import React from 'react';
import styles from './LoginPage.module.css';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topEllipse} />
      <div className={styles.bottomEllipse} />
      
      <div className={styles.borderContainer}>
        <h2 className={styles.logo}>בייביסטאר</h2>

        <div className={styles.mainContent}>
          <h1 className={styles.formTitle}>!ברוכים הבאים</h1>
          <Image 
            src="/images/LoginIllustration.svg"
            alt="Login Illustration"
            width={87.97}
            height={434}
            className={styles.illustration}
          />
          <p className={styles.formSubtitle}>
            בעזרת חזאי האסטרולוגיה שלנו, הבייבי
            שלכם לעולם לא יתפוס אתכם לא
            מוכנים!
            בייביסטאר מאפשרת לכם להיערך
            לשבוע בנחת ובבטחון, על מנת להעניק
            לעצמכם ולתינוקכם את הטוב ביותר.
          </p>

          <p className={styles.formInstruction}>הזינו את פרטיכם על מנת להזדהות</p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                id="email" 
                required
                placeholder="דוא״ל"
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input 
                type="password" 
                id="password"
                required
                placeholder="סיסמה"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              התחבר
            </button>

            <div className={styles.registerContainer}>
              <p className={styles.registerText}>
                לא רשומים עדיין?
                <a href="#" className={styles.registerLink}> !הירשמו כאן</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;