import { NextPage } from "next";
import styles from "./css/Result.module.css";
import Card from './Card';

interface Movie {
		backdrop_path: string;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: "movie" | "tv";
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	first_air_date: string;
	name: string;
}


interface ResultProps {
	results: Movie[];
}

const Result: NextPage<ResultProps> = ({ results }:ResultProps) => {
	return (
		<div className={`${styles.grided}`}>
			{results.map((result) => (
				<Card key={result.id} result={result} />
			))}
		</div>
	);
};

export default Result;
