import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import {  MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

//Firebase
import {firebase} from './firebase'

const Estacion = React.lazy(() => import('pages/Estacion'));
const Welcome = React.lazy(() => import('pages/Welcome'));
const Masivo = React.lazy(() => import('pages/Masivo'));
const MasivoAdmin = React.lazy(() => import('pages/MasivoAdmin'));

//Firebase
const obtenerDatos = async () => {

  try {
      const db = firebase.firestore()
      const datadb = await db.collection('fuelmc-590d7').get()
      console.log("datadb", datadb)
  } catch(error) {
    console.log(error)
  }

}

obtenerDatos()

class App extends React.Component {
  render() {

    return (
      <Router>
          <Switch>
          <Route exact path="/login" component={AuthPage} />
        <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={Estacion} />
                <Route exact path="/masivo" component={Masivo} />
                <Route exact path="/masivoadmin" component={MasivoAdmin} />
              </React.Suspense>
          </MainLayout>
          </Switch>
          </Router>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
