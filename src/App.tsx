import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'blueviolet' }}>Left</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: 'tomato' }}>Right</h1>;
};

export const App = () => {
  return (
    <main>
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
    </main>
  );
};
