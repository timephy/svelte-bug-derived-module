import { language } from "$lib";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async (event) => {
	let localeDetected = event.params["lang"];

	language.set(localeDetected);

	return {};
};
