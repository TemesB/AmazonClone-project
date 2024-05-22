import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './Firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';
const promise = loadStripe(
  'pk_test_51LbW1BJhxzKyqN8yyGcIfxtfAV8FFpHVP6vJDd7qcXFCy165Lo5J17u4TKY1CTYNR09UbGTg5lYnT2kv09XgLu5O00JJOu4LD9'
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/"
            element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;