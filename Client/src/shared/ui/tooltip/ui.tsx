import "./styles.less";

import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Icon, IconType } from "@shared/ui/icon";
import { useWindowSize } from "@shared/lib/hooks";

type TooltipProps = {
	shareLinksData: {
		facebook: string;
		twitter: string;
		pinterest: string;
	};
	isTooltipDisplayed: "hidden" | "displayed";
};

export const Tooltip: FC<TooltipProps> = ({ isTooltipDisplayed, shareLinksData }) => {
	const screenSize = useWindowSize();

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
	return (
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
							<a href={shareLinksData.facebook} target="_blank">
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
							<a href={shareLinksData.twitter} target="_blank">
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
							<a href={shareLinksData.pinterest} target="_blank">
								<span className="visually-hidden">Share post in Pinterest</span>
								<Icon iconType={IconType.Pinterest} />
							</a>
						</motion.li>
					</motion.ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
