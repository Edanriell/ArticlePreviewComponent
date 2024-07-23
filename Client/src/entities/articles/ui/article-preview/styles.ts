import { styled } from "styled-components";

export const ArticlePreviewCard = styled.article`
	border-radius: 1rem;
	box-shadow: 0 4rem 4rem -1rem rgba(201, 213, 225, 0.5);
	background: var(--white);
	max-width: 32.7rem;
	margin: 2.4rem;
	overflow: hidden;
`;

export const ArticlePreviewCardImageWrapper = styled.div`
	width: 100%;
	min-height: 20rem;
	max-height: 20rem;
	position: relative;
	overflow: hidden;
	background-color: var(--rainmaker);
`;

export const ArticlePreviewCardImage = styled.img`
	width: 100%;
	height: 20rem;
	object-fit: cover;
	margin-top: 0;

	@media (width >= 375px) {
		height: 100%;
		margin-top: -24.4rem;
	}
`;

export const ArticlePreviewCardContent = styled.div`
	padding: 3.6rem 3.2rem 3.2rem 3.2rem;
`;

export const ArticlePreviewCardTitle = styled.h2`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 150%;
	letter-spacing: 0.01em;
	color: var(--rainmaker);
	margin: 0 0 1.2rem 0;
	text-align: left;
`;

export const ArticlePreviewCardDescription = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 154%;
	letter-spacing: 0.01em;
	color: var(--infinity-and-beyond);
	text-align: left;
	margin: 0;
`;

export const ArticlePreviewCardFooter = styled.footer`
	padding: 0 3.2rem 2rem 3.2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ArticlePreviewCardAuthorContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 1.6rem;
`;

export const ArticlePreviewCardAuthorImage = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 100%;
	object-fit: cover;
`;

export const ArticlePreviewCardAuthorContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ArticlePreviewCardAuthorFullName = styled.strong`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 1.3rem;
	line-height: 154%;
	letter-spacing: 0.01em;
	color: var(--rainmaker);
`;

export const ArticlePreviewCardPostDate = styled.time`
	font-family: var(--font-family), sans-serif;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 154%;
	letter-spacing: 0.01em;
	color: var(--sterling-silver);
`;

export const ArticlePreviewCardShareButton = styled.button`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 100%;
	background-color: var(--aircraft-white);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: none;
	padding: 0;
`;

export const ArticlePreviewCardShareButtonIcon = styled.svg`
	width: 1.5rem;
	height: 1.3rem;
	color: var(--infinity-and-beyond);
`;
