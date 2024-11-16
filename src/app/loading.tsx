import styles from "./Style/Loading.module.css";
import  Image  from 'next/image';
export default function loading() {
	return (
		<div className={`${styles.loading}`}>
			<Image src="spinner.svg" alt="loading..." width={50} height={50} priority/>
		</div>
	);
}
