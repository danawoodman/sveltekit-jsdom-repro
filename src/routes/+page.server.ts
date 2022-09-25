import type { PageServerLoadEvent } from './$types';
import { JSDOM } from 'jsdom';

export async function load(event: PageServerLoadEvent) {
	const dom = new JSDOM('<p>foo</p>');
	const text = dom.window.document.querySelector('p')?.textContent;
	return { hello: text };
}
