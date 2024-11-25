import styles from "./page.module.css";
import { ApodItem } from "./utils";
import { getData } from "./utils";

export default async function NasaPage() {
  const data: ApodItem[] = await getData(10); 

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>NASA Astronomy Pictures</h1>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.url} alt={item.title} className={styles.image} />
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>
              <strong>Date:</strong> {item.date}
            </p>
            <p className={styles.cardText}>{item.explanation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
