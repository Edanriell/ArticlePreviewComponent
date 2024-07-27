import { Fragment } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { MainLayout } from "@widgets/layouts/main";

export const Route = createRootRoute({
	component: () => (
		<Fragment>
			<MainLayout>
				<Outlet />
			</MainLayout>
			{/*<TanStackRouterDevtools />*/}
		</Fragment>
	)
});
