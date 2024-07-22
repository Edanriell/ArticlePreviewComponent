import { FC } from "react";

import { ArticlePreview } from "@entities/articles/ui/article-preview";

export const HomePage: FC = () => {
	return (
		<section>
			<ArticlePreview />
			<h1>Test</h1>
		</section>
	);
};
