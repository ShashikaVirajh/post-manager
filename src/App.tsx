import { Test } from 'components/test.component';
import { TestTwo } from 'components/testtwo';

const App = (): JSX.Element => {
  return (
    <>
      <div>Hi Im the app</div>
      <Test />
      <TestTwo />
    </>
  );
};

export default App;
