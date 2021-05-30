import { Redirect, Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      {/* 
          A switch azért kell, hogy a / és a /favorites például ne egyszerre renderelődjön ki
          A Swiwtch nélkül a /favorites-re mindkettő kirenderelődne.
          A /-hez még hozzá kell rakni hogy exact
       */}
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Layout>
  );
}

export default App;
