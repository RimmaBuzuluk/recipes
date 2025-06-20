import { Suspense } from 'react';
import MainContainer from '../components/MainContainer';
import RecipesLoading from './loading';
import RecipesItems from '../components/RecipesItems';

export default function ({ searchParams }) {
  return (
    <MainContainer>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-orange-600 mx-auto">Recipes</h1>
        <Suspense fallback={<RecipesLoading />}>
          <RecipesItems searchParams={searchParams} />
        </Suspense>
      </div>
    </MainContainer>
  );
}
