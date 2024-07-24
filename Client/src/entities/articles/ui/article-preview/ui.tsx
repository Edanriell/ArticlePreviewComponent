import "./styles.less";

import { FC, useState } from "react";

import { motion } from "framer-motion";

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
	ArticlePreviewCardShareButton,
	ArticlePreviewCardShareButtonIcon,
	ArticlePreviewCardTitle
} from "./styles.ts";

export const ArticlePreview: FC = () => {
	const [isTooltipDisplayed, setIsTooltipDisplayed] = useState<boolean>(false);

	const handleShareButtonClick = () => {
		setIsTooltipDisplayed(!isTooltipDisplayed);
	};

	return (
		<ArticlePreviewCard>
			<ArticlePreviewCardImageWrapper>
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
					<ArticlePreviewCardImage
						src="/images/raster/articles/article-preview-image.jpg"
						alt="Modern furniture"
					/>
				</picture>
			</ArticlePreviewCardImageWrapper>
			<ArticlePreviewCardContent>
				<ArticlePreviewCardTitle>
					Shift the overall look and feel by adding these wonderful touches to furniture in your
					home
				</ArticlePreviewCardTitle>
				<ArticlePreviewCardDescription>
					Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
					uninviting. I’ve got some simple tips to help you make any room feel complete.
				</ArticlePreviewCardDescription>
			</ArticlePreviewCardContent>
			<ArticlePreviewCardFooter>
				<ArticlePreviewCardAuthorContent>
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
						<ArticlePreviewCardAuthorImage
							src="/images/raster/users/user-michelle-appleton-image.jpg"
							alt="Headshot of Michelle Appleton"
						/>
					</picture>
					<ArticlePreviewCardAuthorContentWrapper>
						<ArticlePreviewCardAuthorFullName>Michelle Appleton</ArticlePreviewCardAuthorFullName>
						<ArticlePreviewCardPostDate dateTime="2020-06-28T20:00">
							28 Jun 2020
						</ArticlePreviewCardPostDate>
					</ArticlePreviewCardAuthorContentWrapper>
				</ArticlePreviewCardAuthorContent>
				<ArticlePreviewCardShareButton onClick={handleShareButtonClick}>
					<ArticlePreviewCardShareButtonIcon
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
					</ArticlePreviewCardShareButtonIcon>
					<span className="visually-hidden">Share article</span>
				</ArticlePreviewCardShareButton>
			</ArticlePreviewCardFooter>
			<motion.div className="tooltip">
				<p className="tooltip__text">Share</p>
				<ul className="tooltip__social-icons-list social-icons-list">
					<li>
						<a href="#" target="_blank">
							<span className="visually-hidden">Share post in Facebook</span>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
									fill="white"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<span className="visually-hidden">Share post in Twitter</span>
							<svg
								width="20"
								height="17"
								viewBox="0 0 20 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 2.17215C19.2642 2.49882 18.4733 2.71882 17.6433 2.81799C18.4908 2.31049 19.1417 1.50632 19.4475 0.547986C18.655 1.01799 17.7767 1.35965 16.8417 1.54382C16.0942 0.746319 15.0267 0.247986 13.8467 0.247986C11.1975 0.247986 9.25083 2.71965 9.84917 5.28549C6.44 5.11465 3.41667 3.48132 1.3925 0.998819C0.3175 2.84299 0.835 5.25549 2.66167 6.47715C1.99 6.45549 1.35667 6.27132 0.804167 5.96382C0.759167 7.86465 2.12167 9.64299 4.095 10.0388C3.5175 10.1955 2.885 10.2322 2.24167 10.1088C2.76333 11.7388 4.27833 12.9247 6.075 12.958C4.35 14.3105 2.17667 14.9147 0 14.658C1.81583 15.8222 3.97333 16.5013 6.29 16.5013C13.9083 16.5013 18.2125 10.0672 17.9525 4.29632C18.7542 3.71715 19.45 2.99465 20 2.17215Z"
									fill="white"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<span className="visually-hidden">Share post in Pinterest</span>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 0C4.4775 0 0 4.47667 0 10C0 14.2367 2.63583 17.855 6.35583 19.3117C6.26833 18.5208 6.18917 17.3075 6.39083 16.4442C6.5725 15.6633 7.56333 11.4733 7.56333 11.4733C7.56333 11.4733 7.26417 10.8742 7.26417 9.98833C7.26417 8.59833 8.07 7.56 9.07333 7.56C9.92583 7.56 10.3383 8.20083 10.3383 8.96833C10.3383 9.82583 9.7925 11.1083 9.51 12.2975C9.27417 13.2925 10.0092 14.105 10.9908 14.105C12.7683 14.105 14.1342 12.2308 14.1342 9.52583C14.1342 7.13167 12.4142 5.4575 9.9575 5.4575C7.1125 5.4575 5.4425 7.59167 5.4425 9.79667C5.4425 10.6558 5.77333 11.5783 6.18667 12.0783C6.26833 12.1775 6.28 12.265 6.25583 12.3658L5.97833 13.4992C5.93417 13.6825 5.83333 13.7217 5.64333 13.6333C4.39417 13.0517 3.61333 11.2258 3.61333 9.75917C3.61333 6.605 5.905 3.7075 10.2208 3.7075C13.69 3.7075 16.3858 6.18 16.3858 9.48333C16.3858 12.93 14.2133 15.7033 11.1967 15.7033C10.1833 15.7033 9.23083 15.1775 8.905 14.555L8.28167 16.9325C8.05583 17.8017 7.44667 18.8908 7.03833 19.5542C7.975 19.8433 8.96917 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47667 15.5225 0 10 0Z"
									fill="white"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</motion.div>
		</ArticlePreviewCard>
	);
};
