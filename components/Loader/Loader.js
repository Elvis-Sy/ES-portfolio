import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.initials}>
          <div className={styles.letterE}>
            <span className={styles.vertical} />
            <span className={styles.horizontalTop} />
            <span className={styles.horizontalMiddle} />
            <span className={styles.horizontalBottom} />
          </div>

          <div className={styles.letterS}>
            <span className={styles.curve} />
          </div>
        </div>
        <div className={styles.progress} />
      </div>
    </div>
  );
};

export default Loader;