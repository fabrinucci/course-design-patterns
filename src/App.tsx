import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ title }: { title: string }) => {
  return <h1 style={{ backgroundColor: 'blueviolet' }}>{title}</h1>;
};

const RightHandComponent = ({ message }: { message: string }) => {
  return <h1 style={{ backgroundColor: 'tomato' }}>{message}</h1>;
};

export const App = () => {
  return (
    <main>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent title='Left title' />
        <RightHandComponent message='Right message' />
      </SplitScreen>
    </main>
  );
};
