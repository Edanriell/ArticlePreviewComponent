import { styled } from "styled-components";

export const ArticlePreviewCard = styled.article`
	display: grid;
	grid-template-rows: 20rem repeat(2, auto);
	grid-template-columns: auto;
	border-radius: 1rem;
	box-shadow: 0 4rem 4rem -1rem rgba(201, 213, 225, 0.5);
	background: var(--white);
	max-width: 32.7rem;
	margin: 2.4rem;
	position: relative;
	overflow: hidden;

	@media (width >= 900px) {
		overflow: unset;
		grid-template-columns: 28.5rem 1fr;
		grid-template-rows: repeat(2, auto);
		column-gap: 4rem;
		max-width: 73rem;
	}
`;

export const ArticlePreviewCardImageWrapper = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	background-color: var(--rainmaker);
	grid-column: 1 / -1;
	grid-row: 1 / 2;
	border-radius: 1rem 1rem 0 0;

	@media (width >= 900px) {
		grid-column: 1 / 2;
		grid-row: 1 / -1;
		min-height: 100%;
		max-height: 100%;
		border-radius: 1rem 0 0 1rem;
	}
`;

export const ArticlePreviewCardImage = styled.img`
	width: 100%;
	height: 49rem;
	object-fit: cover;
	position: absolute;
	bottom: -4.6rem;
	left: 0;

	@media (width >= 900px) {
		width: inherit;
		height: 52.4rem;
		bottom: 0;
	}
`;

export const ArticlePreviewCardContent = styled.div`
	padding: 3.6rem 3.2rem 0.8rem 3.2rem;
	grid-column: 1 / -1;
	grid-row: 2 / 3;

	@media (width >= 900px) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		padding: 3.2rem 4rem 2rem 0;
	}
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

	@media (width >= 900px) {
		font-size: 2rem;
		line-height: 140%;
	}
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
	padding: 2.4rem 3.2rem 2rem 3.2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	grid-column: 1 / -1;
	grid-row: 3 / 4;
	overflow: hidden;
	position: relative;

	@media (width >= 900px) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		padding: 0 4rem 3.2rem 0;
		overflow: visible;
	}
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
