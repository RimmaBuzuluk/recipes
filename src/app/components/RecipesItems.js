import { apiKey } from '../utils/YOUR_API_KEY';
import A from './A';

async function getRecipes({ query = '', cuisine = '', time = 0 }) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${time}&apiKey=${apiKey}`,

    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to load recipes');
  return res.json();
}

export default async function RecipesItems({ searchParams }) {
  const recipes = await getRecipes(searchParams);
  const recipesItems = recipes.results;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipesItems.map((recipe) => (
        <A href={`/recipes/${recipe.id}`}>
          <div
            key={recipe.id}
            className="border rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">{recipe.title}</h2>

              {recipe.time && (
                <p className="text-sm text-gray-600 mb-1">⏱️ Time: {recipe.time} min</p>
              )}

              {recipe.cuisine && (
                <p className="text-sm text-gray-600">🍽 Cuisine: {recipe.cuisine}</p>
              )}
            </div>
          </div>
        </A>
      ))}
    </div>
  );
}
