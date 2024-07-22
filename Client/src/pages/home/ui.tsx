import { FC } from "react";

import { ArticlePreview } from "@entities/articles/ui/article-preview";

import { MainPage } from "./styles";

export const HomePage: FC = () => {
	return (
		<MainPage>
			<h1 className="visually-hidden">Article preview component</h1>
			<ArticlePreview />
		</MainPage>
	);
};
