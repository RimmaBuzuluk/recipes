import Form from './components/Form';

import MainContainer from './components/MainContainer';

export default function Home() {
  return (
    <MainContainer>
      <main className="flex flex-col justify-center h-full gap-[32px] row-start-2 items-center sm:items-start p-4">
        <Form></Form>
      </main>
    </MainContainer>
  );
}
