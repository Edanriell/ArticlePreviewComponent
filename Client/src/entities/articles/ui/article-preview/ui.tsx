import "./styles.less";

import { FC, useState } from "react";
import { motion } from "framer-motion";

import { Tooltip } from "@shared/ui/tooltip";
import { formatDate } from "@shared/lib/functions";

import {
	ArticlePreviewCard,
	ArticlePreviewCardAuthorContent,
	ArticlePreviewCardAuthorContentWrapper,
	ArticlePreviewCardAuthorFullName,
	ArticlePreviewCardAuthorImage,
	ArticlePreviewCardContent,
	ArticlePreviewCardDescription,
	ArticlePreviewCardFooter,
	ArticlePreviewCardImage,
	ArticlePreviewCardImageWrapper,
	ArticlePreviewCardPostDate,
	ArticlePreviewCardTitle
} from "./styles.ts";

type ArticlePreviewProps = {
	title: string;
	description: string;
	image: {
		small?: string;
		medium?: string;
		large?: string;
		smallWebp?: string;
		mediumWebp?: string;
		largeWebp?: string;
	};
	author: {
		fullName: string;
		image: {
			small?: string;
			medium?: string;
			large?: string;
			smallWebp?: string;
			mediumWebp?: string;
			largeWebp?: string;
		};
	};
	date: Date;
	shareLinks: {
		facebook: string;
		twitter: string;
		pinterest: string;
	};
};

export const ArticlePreview: FC<ArticlePreviewProps> = ({
	title,
	description,
	image,
	author,
	date,
	shareLinks
}) => {
	const [isTooltipDisplayed, setIsTooltipDisplayed] = useState<"hidden" | "displayed">("hidden");

	const handleShareButtonClick = () => {
		if (isTooltipDisplayed === "hidden") {
			setIsTooltipDisplayed("displayed");
		} else {
			setIsTooltipDisplayed("hidden");
		}
	};

	const shareButtonAnimationVariants = {
		active: { backgroundColor: "#6e8098" },
		inActive: { backgroundColor: "#ecf2f8" }
	};

	const shareButtonIconAnimationVariants = {
		active: { color: "#ffffff" },
		inActive: { color: "#6e8098" }
	};

	return (
		<ArticlePreviewCard>
			<ArticlePreviewCardImageWrapper>
				<picture>
					<source srcSet={image?.smallWebp} media="(min-width: 375px)" type="image/webp" />
					<source srcSet={image?.small} media="(min-width: 375px)" type="image/jpg" />
					<ArticlePreviewCardImage src={image?.small} alt="Modern furniture" />
				</picture>
			</ArticlePreviewCardImageWrapper>
			<ArticlePreviewCardContent>
				<ArticlePreviewCardTitle>{title}</ArticlePreviewCardTitle>
				<ArticlePreviewCardDescription>{description}</ArticlePreviewCardDescription>
			</ArticlePreviewCardContent>
			<ArticlePreviewCardFooter>
				<ArticlePreviewCardAuthorContent>
					<picture>
						<source
							srcSet={author?.image?.smallWebp}
							media="(min-width: 375px)"
							type="image/webp"
						/>
						<source srcSet={author?.image?.small} media="(min-width: 375px)" type="image/jpg" />
						<ArticlePreviewCardAuthorImage
							src={author?.image?.small}
							alt={"Headshot of " + author.fullName}
						/>
					</picture>
					<ArticlePreviewCardAuthorContentWrapper>
						<ArticlePreviewCardAuthorFullName>{author.fullName}</ArticlePreviewCardAuthorFullName>
						<ArticlePreviewCardPostDate dateTime={date.toLocaleString()}>
							{formatDate(date)}
						</ArticlePreviewCardPostDate>
					</ArticlePreviewCardAuthorContentWrapper>
				</ArticlePreviewCardAuthorContent>
				<div className="share-button__wrapper">
					<motion.button
						animate={
							(isTooltipDisplayed === "displayed" && "active") ||
							(isTooltipDisplayed === "hidden" && "inActive")
						}
						whileHover={{
							scale: 1.15
						}}
						whileTap={{ scale: 0.9 }}
						variants={shareButtonAnimationVariants}
						onClick={handleShareButtonClick}
						className="share-button"
					>
						<motion.svg
							animate={
								(isTooltipDisplayed === "displayed" && "active") ||
								(isTooltipDisplayed === "hidden" && "inActive")
							}
							whileHover={{
								scale: 1.15
							}}
							whileTap={{ scale: 0.9 }}
							variants={shareButtonIconAnimationVariants}
							className="share-button__icon"
							width="15"
							height="13"
							viewBox="0 0 15 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 6.49504L8.76629 0.013916V3.88067H7.44095C3.33138 3.88067 0 7.03931 0 10.9358V12.9849L0.588684 12.3733C2.59014 10.2941 5.4221 9.1094 8.39115 9.1094H8.76629V12.9762L15 6.49504Z"
								fill="currentColor"
							/>
						</motion.svg>
						<span className="visually-hidden">Share article</span>
					</motion.button>
					<Tooltip shareLinksData={shareLinks} isTooltipDisplayed={isTooltipDisplayed} />
				</div>
			</ArticlePreviewCardFooter>
		</ArticlePreviewCard>
	);
};
