import { NextPage } from "next";
import NavItem from "./NavItem";
import styles from "./css/Navbar.module.css";


const Navbar: NextPage = ({}) => {
	return (
		<>
			<div className={styles["navbar-container"]}>
				<NavItem title="Trending" param="fetchTrending" />
				<NavItem title="Top Rated" param="fetchTop" />
			</div>
		</>
	);
};

export default Navbar;
