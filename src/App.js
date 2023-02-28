import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utility/PrivateRoute';
import MyProfilePage from './pages/Admin/MyProfilePage/MyProfilePage';
import ListExamplePage from './pages/Admin/ListExamplePage/ListExamplePage';
import ProductsECPage from './pages/Admin/ProductsECPage/ProductsECPage';
import AddEditProductECPage from './pages/Admin/ProductsECPage/AddEditProductECPage';

// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';
import InscriptionPage from './pages/InscriptionPage/InscriptionPage';
import HomePage from './pages/HomePage/HomePage';
import AdicionPage from './pages/AdicionPage/AdiciendoPage';
import LevantamientoPage from './pages/LevantamientoPage/LevantamientoPage';


/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  // options
  // let navBarOptions = {
  //   main: [
  //     { option: 'Home', to: '/' },
  //   ],
  //   right: [
  //     { option: 'My Profile', to: '/my-profile', displayIfLoggedIn: true },
  //     { option: 'Products', to: '/products-ec', displayIfLoggedIn: true },
  //     { option: 'Login', to: '/login', displayIfLoggedIn: false },
  //     { option: 'Logout', to: '/logout', displayIfLoggedIn: true },
  //   ],
  // };
  return (
    <BrowserRouter>
      {/* <NavBar navBarOptions={navBarOptions} /> */}
      <div className="App">
        <Routes>
          <Route path="home" element={<HomePage/>}/>
          <Route path="inscription" element={<InscriptionPage />} />
          <Route path="adicion" element={< AdicionPage/>} />
          <Route path="levantamiento" element={< LevantamientoPage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route
            path="my-profile"
            element={
              <PrivateRoute>
                <MyProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="admin/list">
            <Route
              path=":listId"
              element={
                <PrivateRoute>
                  <ListExamplePage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="products-ec"
            element={
              <PrivateRoute>
                <ProductsECPage />
              </PrivateRoute>
            }
          />
          <Route path="product-ec/edit">
            <Route
              path=":productId"
              element={
                <PrivateRoute>
                  <AddEditProductECPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="product-ec/add"
            element={
              <PrivateRoute>
                <AddEditProductECPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
