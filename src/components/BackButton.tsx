"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./css/BackButton.module.css";

const BackButton: NextPage = () => {
	const router = useRouter(); 

	const navigate = () => {
		router.push("/");
	};

	return (
		<div>
			<Button
				onClick={navigate}
				className={`${styles["mui-button"]}`}
				sx={{
					borderRadius: "50%",
					border: "1px solid #475569",
					color: "#475569",
					fontSize: "18px",
					cursor: "pointer",
					transition: "background-color 0.3s ease",
					height: 60,
					width: 60,
					justifyContent: "center",
					margin: "0 0 0 40px ",
					alignItems: "center",
					display: { xs: "none", sm: "flex" },
				}}
			>
				<FaArrowLeft className={`${styles.arrow}`} />
			</Button>
		</div>
	);
};

export default BackButton;
