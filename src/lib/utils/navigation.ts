import { goto as svelteGoto } from '$app/navigation';
import { PUBLIC_BASE_URL } from '$env/static/public';

interface GotoOpts {
	replaceState?: boolean | undefined;
	noScroll?: boolean | undefined;
	keepFocus?: boolean | undefined;
	invalidateAll?: boolean | undefined;
	state?: App.PageState | undefined;
}

export const goto = (path: string | URL, opts?: GotoOpts): Promise<void> => {
	return svelteGoto(`${PUBLIC_BASE_URL || ''}${path}`, opts);
};
