import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import styles from "./css/Card.module.css";

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
	result: Movie;
}

const Card: NextPage<ResultProps> = ({ result }: ResultProps) => {
	return (
		<>
			<div className="">
				<div className={styles["grided-item"]}>
					<Link href={`/movie/${result.id}`}>
						<div className={styles["image-container"]}>
							<Image
								src={`https://image.tmdb.org/t/p/original/${
									result.backdrop_path || result.poster_path
								}`}
								alt="Movie Poster"
								width={500}
								height={700}
								priority
							/>
						</div>
						<div className={styles.content}>
							<p className={styles.overview}>{result.overview}</p>
							<h2 className={styles.title}>{result.title || result.name}</h2>
							<p className={styles.details}>
								<span className={styles.date}>
									{result.release_date || result.first_air_date}
								</span>
								<FiThumbsUp className={styles["thumbs-up"]} />
								{result.vote_count}
							</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Card;
