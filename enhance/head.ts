import type {
	EnhanceApiRequest,
	EnhanceElementResult,
	EnhanceHeadFunction,
} from "./types";

const Head: EnhanceHeadFunction = function (
	req: EnhanceApiRequest,
): EnhanceElementResult {
	const { path } = req;
	const title = `Todos — ${path}`;
	return /* html */ `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link rel="stylesheet" href="/_static/styles.css">
  <link rel="icon" href="https://fav.farm/✅" />
</head>
<body class="p4">
  `;
};

export default Head;
