export const formatDate = (date: Date) => {
	const dateOptions: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "short",
		year: "numeric"
	};

	return date.toLocaleDateString("en-GB", dateOptions);
};
