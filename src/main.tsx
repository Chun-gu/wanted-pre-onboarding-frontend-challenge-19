import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/app/index.css";
import { Providers } from "@/app/providers";

import App from "./App.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>,
);
