import { apiKey } from '@/app/utils/YOUR_API_KEY';
import MainContainer from '../../components/MainContainer';

export default async function ({ params }) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`,
    {}
  );
  const recipe = await res.json();

  console.log(recipe);

  return (
    <MainContainer>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />

        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-orange-600">{recipe.title}</h1>

          {recipe.summary && (
            <div
              className="text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>⏱ Ready in: {recipe.readyInMinutes} min</span>
            <span>🍽 Servings: {recipe.servings}</span>
            <span>❤️ Likes: {recipe.aggregateLikes}</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
         
          {recipe.instructions && (
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Instructions</h2>
              <div
                className="prose prose-sm max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              />
            </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
}
