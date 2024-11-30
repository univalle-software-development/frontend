const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
      const response = await fetch(`http://my-app-route-cristiandpt-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/search?q=${search}`);
      return response.json();
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
