import Result from "../components/Result";

type HomeProps = {
	searchParams?:
		| Promise<{
				genre?: string;
		  }>
		| undefined;
};

const API_KEY = "ad489d97dc4b2b3432c39e443fa2bb44";

export default async function Home({
	searchParams = Promise.resolve({}),
}: HomeProps) {
	const resolvedSearchParams = await searchParams;

	const { genre } = resolvedSearchParams || { genre: "fetchTrending" };

	const url = `https://api.themoviedb.org/3${
		genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
	}?api_key=${API_KEY}&language=en-US&page=1`;

	let results = [];

	try {
		const res = await fetch(url, { next: { revalidate: 10000 } });
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await res.json();
		results = data.results;
	} catch (error) {
		console.error("Error fetching data:", error);
		results = [];
	}

	return (
		<div>
			<Result results={results} />
		</div>
	);
}
