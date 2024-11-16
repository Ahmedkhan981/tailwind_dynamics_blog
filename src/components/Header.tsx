"use client";
import { NextPage } from "next";

import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import styles from "./css/Header.module.css";

import Link from "next/link";
import DarkSwitch from './DarkSwitch';


const Header: NextPage = ({}) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.main}>
					<MenuItem title="home" address="/" Icon={AiFillHome} />
					<MenuItem
						title="about"
						address="/about"
						Icon={BsFillInfoCircleFill}
					/>
				</div>
				<div className={styles["sub-container"]}>
					<DarkSwitch />
					<Link href={"/"} className={styles.main2}>
						<span className={styles.movie}>Movie</span>
						<span className={styles.details}>Detail</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
