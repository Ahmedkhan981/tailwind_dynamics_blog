"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./Style/Providers.module.css";

type Props = {
	children: React.ReactNode;
};

const Providers = (props: Props) => {
	const { children } = props;
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Delay rendering until after mounting on the client to avoid SSR mismatches
	if (!mounted) return null;

	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<div className={styles["div-theme"]}>{children}</div>
		</ThemeProvider>
	);
};

export default Providers;
