import Result from "@/components/Result";
import styles from "../../Style/SearchPage.module.css";

const API_KEY = "ad489d97dc4b2b3432c39e443fa2bb44";

export default async function SearchPage({
	params,
}: {
	params: Promise<{ searchTerm: string }>; 
}) {

	const resolvedParams = await params;
	const { searchTerm } = resolvedParams;

	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
		);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}

		const data = await res.json();
		const results = data.results;

		return (
			<div>
				{results && results.length === 0 && (
					<h1 className={styles.h1}>No results found</h1>
				)}
				{results && results.length > 0 && <Result results={results} />}
			</div>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		return (
			<div>
				<h1 className={styles.h1}>Something went wrong</h1>
			</div>
		);
	}
}
