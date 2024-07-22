import { FC, ReactNode } from "react";

import { Main } from "./styles.ts";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => <Main>{children}</Main>;
