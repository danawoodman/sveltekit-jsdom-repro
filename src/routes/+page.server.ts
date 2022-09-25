import { JSDOM } from 'jsdom';

export async function load() {
	const { window } = new JSDOM('<p>foo</p>');
	const text = window.document.querySelector('p')?.textContent;
	return { hello: text };
}
