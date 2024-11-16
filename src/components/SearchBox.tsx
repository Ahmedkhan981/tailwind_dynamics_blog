"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/SearchBox.module.css";

export default function SearchBox() {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		router.push(`/search/${search}`);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search keywords..."
				className={styles.input}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className={styles.button} disabled={search === ""}>
				<span>Search</span>
			</button>
		</form>
	);
}
