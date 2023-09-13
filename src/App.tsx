import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

const App: FC = () => (
  <>
    <Navigate to="/properties" replace={true} />
  </>
);

export default App;
