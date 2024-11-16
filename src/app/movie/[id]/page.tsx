import Image from "next/image";
import styles from "../../Style/MoviePage.module.css";
import { Typography, Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BackButton from "@/components/BackButton";

// Type for MoviePageProps
type MoviePageProps = {
	params: Promise<{ id: string }>; // params is now a Promise
};

// Type for Movie
type Movie = {
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
	genres?: { id: number; name: string }[];
	runtime?: number;
	budget?: number;
	revenue?: number;
	production_companies?: { id: number; name: string }[];
};

const API_KEY = "ad489d97dc4b2b3432c39e443fa2bb44";

// MoviePage Component
export default async function MoviePage({ params }: MoviePageProps) {
	const { id: movieId } = await params; // Await the promise to resolve params

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
	);
	const movie: Movie = await res.json();

	const runtimeHours = Math.floor((movie.runtime ?? 0) / 60);
	const runtimeMinutes = (movie.runtime ?? 0) % 60;
	const imdbRatingNumber = movie.vote_average / 2;

	return (
		<div className={styles.container}>
			<BackButton />
			<div className={styles["movie-wrapper"]}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					height={500}
					width={600}
					className={styles["movie-image"]}
					alt={`${movie.title || movie.name} Poster`}
					priority
				/>
				<div className={styles["movie-details"]}>
					<h2 className={styles["movie-title"]}>
						{movie.title || movie.name} :
					</h2>
					<p className={styles["movie-overview"]}>{movie.overview}</p>
					<p className={styles["release-info"]}>
						<span className={styles.label}>Date Released:</span>
						{movie.release_date || movie.first_air_date}
					</p>
					<Typography
						component="legend"
						className={`${styles["double-underline"]}`}
					>
						Rating
					</Typography>
					<Stack spacing={1}>
						<Rating
							name="imdb-rating-small"
							value={imdbRatingNumber}
							precision={0.1}
							readOnly
							icon={<StarIcon />}
							emptyIcon={<StarBorderIcon className={`${styles.emptyIcon}`} />}
						/>
					</Stack>

					<p className={styles["extra-info"]}>
						<span className={styles.label}>Genres:</span>
						{movie.genres?.map((genre) => genre.name).join(", ")}
					</p>
					<p className={styles["extra-info"]}>
						<span className={styles.label}>Runtime:</span>{" "}
						{runtimeHours > 0 ? `${runtimeHours} hours ` : ""}
						{runtimeMinutes} minutes
					</p>
					<p className={styles["extra-info"]}>
						<span className={styles.label}>Budget:</span> $
						{movie.budget?.toLocaleString()}
					</p>
					<p className={styles["extra-info"]}>
						<span className={styles.label}>Revenue:</span> $
						{movie.revenue?.toLocaleString()}
					</p>
					<p className={styles["extra-info"]}>
						<span className={styles.label}>Popularity:</span> {movie.popularity}
					</p>
					<p className={styles["extra-info"]}>
						<span className={styles.label}>Language:</span>
						{movie.original_language?.toUpperCase()}
					</p>
					<p className={styles["extra-info"]}>
						<span className={styles.label}>Production Companies:</span>
						<br />
						{movie.production_companies
							?.map((company) => company.name)
							.join(", ")}
					</p>
				</div>
			</div>
		</div>
	);
}
