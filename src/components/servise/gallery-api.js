const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34927166-1b481bada704bd8d544084057';

export async function FetchGallery({ searchText, page, perPage }) {
  const response = await fetch(
    `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}