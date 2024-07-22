import { FC } from "react";

export const ArticlePreview: FC = () => {
	return (
		<article>
			<picture>
				<source
					srcSet="/images/raster/articles/article-preview-image.webp"
					media="(min-width: 375px)"
					type="image/webp"
				/>
				<source
					srcSet="/images/raster/articles/article-preview-image.jpg"
					media="(min-width: 375px)"
					type="image/jpg"
				/>
				<img src="/images/raster/articles/article-preview-image.jpg" alt="Modern furniture" />
			</picture>
			<div>
				<h2>
					Shift the overall look and feel by adding these wonderful touches to furniture in your
					home
				</h2>
				<p>
					Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
					uninviting. I’ve got some simple tips to help you make any room feel complete.
				</p>
			</div>
			<footer>
				<picture>
					<source
						srcSet="/images/raster/users/user-michelle-appleton-image.webp"
						media="(min-width: 375px)"
						type="image/webp"
					/>
					<source
						srcSet="/images/raster/users/user-michelle-appleton-image.jpg"
						media="(min-width: 375px)"
						type="image/jpg"
					/>
					<img
						src="/images/raster/users/user-michelle-appleton-image.jpg"
						alt="Headshot of Michelle Appleton"
					/>
				</picture>
				<div>
					<strong>Michelle Appleton</strong>
					<time dateTime="2020-06-28T20:00">28 Jun 2020</time>
				</div>
				<button>
					<svg
						width="15"
						height="13"
						viewBox="0 0 15 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15 6.49504L8.76629 0.013916V3.88067H7.44095C3.33138 3.88067 0 7.03931 0 10.9358V12.9849L0.588684 12.3733C2.59014 10.2941 5.4221 9.1094 8.39115 9.1094H8.76629V12.9762L15 6.49504Z"
							fill="white"
						/>
					</svg>
					<span className="visually-hidden">Share article</span>
				</button>
			</footer>
		</article>
	);
};
