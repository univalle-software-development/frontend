const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
	if (search === '') return null

	const apiUrl = import.meta.env.VITE_NODE_ENV === 'production'
		  ? import.meta.env.VITE_API_URL_PROD
		  : import.meta.env.VITE_API_URL_DEV;
	
	try {
		const response = await fetch(`${apiUrl}?q=${search}`);
		return response.json();
	} catch (e) {
		throw new Error('Error searching movies')
	}
}
