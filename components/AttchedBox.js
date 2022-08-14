import styles from "../styles/Home.module.css";
import webDetails from "../utils/WebDetails";
const AttchedBox = () => {
  return (
    <div  className={styles.attached_box}>

        {webDetails.map(webDetails=> <div> <h2>{webDetails.name}</h2><p>{webDetails.desc}</p></div>)}
    </div>
  )
}

export default AttchedBox