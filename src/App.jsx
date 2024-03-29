import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.invitation}>
      <div className={styles.yeLoParent}>
        <div className={styles.yeLo}>Ye Lo</div>
        <div className={styles.yeLo}>Alag Se</div>
        <div className={styles.invitation1}>Invitation</div>
        <div className={styles.yeLo}>Ab Chalo</div>
      </div>
      <div className={styles.swatantraVeerSavarkarContainer}>
        <p className={styles.swatantraVeerSavarkar}>Swatantra Veer Savarkar</p>
        <p className={styles.swatantraVeerSavarkar}> Drama ‧ 2h 56m</p>
      </div>
      <div className={styles.dekhne}>DEKHNE</div>
    </div>
  );
};

export default App;