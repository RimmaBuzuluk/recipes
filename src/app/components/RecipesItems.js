import Link from 'next/link';
import { apiKey } from '../utils/YOUR_API_KEY';
import A from './A';


const RECIPES_PER_PAGE = 9;


async function getRecipes({ query = '', cuisine = '', time = 0, offset = 0  }) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${time}&apiKey=${apiKey}&number=${RECIPES_PER_PAGE}&offset=${offset}`,

    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to load recipes');
  return res.json();
}



export default async function RecipesItems({ searchParams }) {
    const page = parseInt(searchParams.page) || 1;
  const offset = (page - 1) * RECIPES_PER_PAGE;

  const recipesData = await getRecipes({ ...searchParams, offset });
  const { results: recipesItems, totalResults } = recipesData;

  const totalPages = Math.ceil(totalResults / RECIPES_PER_PAGE);

const buildQueryString = (newPage) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (key !== 'page') {
      params.set(key, value);
    }
  }
  params.set('page', newPage);

  return `/recipes?${params.toString()}`;
};

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipesItems.map((recipe) => (
        <A href={`/recipes/${recipe.id}`} key={recipe.id}>
          <div
            key={recipe.id}
            className="border rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow h-full"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">{recipe.title}</h2>
            </div>
          </div>
        </A>
      ))}
    </div>
          <div className="flex justify-center gap-4 mt-6">
                    {page > 1 && (
          <Link
            href={buildQueryString(page - 1)}
            className="px-4 py-2 border rounded text-orange-600 border-orange-300 hover:bg-orange-50 "
          >
            ← Previous
          </Link>
        )}

        {page < totalPages && (
          <Link
            href={buildQueryString(page + 1)}
            className="px-4 py-2 border rounded text-orange-600 border-orange-300 hover:bg-orange-50"
          >
            Next →
          </Link>
        )}
</div>
    </>
  );
}