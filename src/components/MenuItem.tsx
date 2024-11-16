
import Link from "next/link";
import React from "react";
import styles from "./css/MenuItem.module.css";

interface MenuItemProps {
	title: string;
	address: string;
	Icon: React.ElementType;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
	return (
		<div className={styles["menu-item"]}>
			<Link href={address}>
				<Icon className={styles.icon} />
				<p className={styles.title}>{title}</p>
			</Link>
		</div>
	);
};

export default MenuItem;
