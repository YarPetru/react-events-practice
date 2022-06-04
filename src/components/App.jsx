import Counter from '../components/Counter/Counter';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.container}>
      <Counter initialValue={100} />
    </div>
  );
};
