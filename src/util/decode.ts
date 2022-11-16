const he = require('he');

export function decodeTitle(title:string) {
	return he.decode(title)
}