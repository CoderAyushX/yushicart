import { FaUserCircle, FaShoppingCart} from 'react-icons/fa';

import { FiShoppingBag } from "react-icons/fi";
import styles from "../styles/components/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.full_width}>
      <div className={styles.navbar_container}>
        {/* heading */}
        <div>
          <h1>YusiCart</h1>
        </div>

        {/* nav menus */}
        <div className={styles.navbar_list}>
          <ul>
            <li>Home</li>
            <li>Cloths</li>
            <li>Shoes</li>
            <li>Mugs</li>
            <li>More</li>
          </ul>
        </div>

        {/* nav icons */}
        <div className={styles.navbar_list}>
          <ul>
            <li><FiShoppingBag size={20}/></li>
            <li><FaUserCircle size={20}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
