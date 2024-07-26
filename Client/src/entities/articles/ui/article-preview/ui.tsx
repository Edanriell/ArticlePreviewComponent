import "./styles.less";

import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Icon, IconType } from "@shared/ui/icon";
import { useWindowSize } from "@shared/lib/hooks";

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

export const ArticlePreview: FC = () => {
	const [isTooltipDisplayed, setIsTooltipDisplayed] = useState<"hidden" | "displayed">("hidden");

	const screenSize = useWindowSize();

	const handleShareButtonClick = () => {
		if (isTooltipDisplayed === "hidden") {
			setIsTooltipDisplayed("displayed");
		} else {
			setIsTooltipDisplayed("hidden");
		}
	};

	const tooltipAnimationVariants = {
		initial: {
			translateY: screenSize.width && screenSize?.width >= 900 ? "14px" : "100%",
			opacity: 0
		},
		displayed: {
			translateY: screenSize.width && screenSize?.width >= 900 ? "0px" : "0%",
			opacity: 1
		},
		hidden: {
			translateY: screenSize.width && screenSize?.width >= 900 ? "14px" : "100%",
			opacity: 0
		}
	};

	const tooltipContentAnimationVariants = {
		initial: { filter: "blur(2.5px)" },
		displayed: { filter: "blur(0px)" },
		hidden: { filter: "blur(2.5px)" }
	};

	const tooltipTriggerAnimationVariants = {
		active: { backgroundColor: "#6e8098" },
		inActive: { backgroundColor: "#ecf2f8" }
	};

	const tooltipTriggerIconAnimationVariants = {
		active: { color: "#ffffff" },
		inActive: { color: "#6e8098" }
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
						variants={tooltipTriggerAnimationVariants}
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
							variants={tooltipTriggerIconAnimationVariants}
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
					<AnimatePresence>
						{isTooltipDisplayed === "displayed" && (
							<motion.div
								initial="initial"
								animate={isTooltipDisplayed === "displayed" && "displayed"}
								exit="hidden"
								variants={tooltipAnimationVariants}
								transition={{ ease: "easeInOut", duration: 0.25 }}
								className="tooltip"
							>
								<motion.p
									initial="initial"
									animate={isTooltipDisplayed === "displayed" && "displayed"}
									exit="hidden"
									variants={tooltipContentAnimationVariants}
									transition={{ ease: "easeInOut", duration: 0.25 }}
									className="tooltip__text"
								>
									Share
								</motion.p>
								<motion.ul
									initial="initial"
									animate={isTooltipDisplayed === "displayed" && "displayed"}
									exit="hidden"
									variants={tooltipContentAnimationVariants}
									transition={{ ease: "easeInOut", duration: 0.25 }}
									className="tooltip__social-icons-list social-icons-list"
								>
									<motion.li
										whileHover={{
											scale: 1.15
										}}
										whileTap={{ scale: 0.9 }}
									>
										<a href="#" target="_blank">
											<span className="visually-hidden">Share post in Facebook</span>
											<Icon iconType={IconType.Facebook} />
										</a>
									</motion.li>
									<motion.li
										whileHover={{
											scale: 1.15
										}}
										whileTap={{ scale: 0.9 }}
									>
										<a href="#" target="_blank">
											<span className="visually-hidden">Share post in Twitter</span>
											<Icon iconType={IconType.Twitter} />
										</a>
									</motion.li>
									<motion.li
										whileHover={{
											scale: 1.15
										}}
										whileTap={{ scale: 0.9 }}
									>
										<a href="#" target="_blank">
											<span className="visually-hidden">Share post in Pinterest</span>
											<Icon iconType={IconType.Pinterest} />
										</a>
									</motion.li>
								</motion.ul>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</ArticlePreviewCardFooter>
		</ArticlePreviewCard>
	);
};
