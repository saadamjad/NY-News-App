/** @format */

const AUTH_APIS = {
	LOGIN: 'auth/login',
	SIGN_UP: 'auth/register',
};

const STORIES_APIS = {
	WORLD: 'topstories/v2/world.json?api-key=',
	SCIENCE: 'topstories/v2/science.json?api-key=',
};
const SEARCH_ARTICLES = 'search/v2/articlesearch.json';

export default { AUTH_APIS, STORIES_APIS, SEARCH_ARTICLES };
