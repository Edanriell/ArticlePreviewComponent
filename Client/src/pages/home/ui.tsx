import { FC } from "react";

import { ArticlePreview } from "@entities/articles/ui/article-preview";

import { MainPage } from "./styles";

const articleData = {
	title:
		"Shift the overall look and feel by adding these wonderful touches to furniture in your home",
	description:
		"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
	image: {
		small: "/images/raster/articles/article-preview-image.jpg",
		smallWebp: "/images/raster/articles/article-preview-image.webp"
	},
	author: {
		fullName: "Michelle Appleton",
		image: {
			small: "/images/raster/users/user-michelle-appleton-image.jpg",
			smallWebp: "/images/raster/users/user-michelle-appleton-image.webp"
		}
	},
	date: new Date("2020-06-28T20:00"),
	shareLinks: {
		facebook: "#",
		twitter: "#",
		pinterest: "#"
	}
};

export const HomePage: FC = () => {
	return (
		<MainPage>
			<h1 className="visually-hidden">Article preview component</h1>
			<ArticlePreview
				title={articleData.title}
				description={articleData.description}
				image={articleData.image}
				author={articleData.author}
				date={articleData.date}
				shareLinks={articleData.shareLinks}
			/>
		</MainPage>
	);
};
