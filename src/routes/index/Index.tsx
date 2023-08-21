import CardList from './card-list/CardList';
import type { FC } from 'react';
import SignInModal from './sign-in-modal/SignInModal';
import { isUserSignedIn } from '../../api/sessions';

const Index: FC = () => (
  <main>
    <h1>Opportunities</h1>
    <span>Remember to put a searchbar here...</span>
    <CardList />
    {!isUserSignedIn() && <SignInModal />}
  </main>
);

export default Index;
