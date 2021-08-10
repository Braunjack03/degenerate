import {
  BrowserRouter as Router,
  Switch,
  Route /* 
  Redirect, */,
} from "react-router-dom";
import Terms from "./renderer/components/views/terms/Terms";
import Navbar from "./renderer/components/navbar/Navbar";
import Footer from "./renderer/components/footer/Footer";
import HomePage from "./renderer/components/views/homepage/HomePage";
import Rarity from "./renderer/components/views/rarity/rarity";
import Loader from "./renderer/components/views/loader/Loader";
import { useEffect } from "react";
import useReduxState from "./renderer/hooks/useReduxState";
export default function Main(): JSX.Element {
  /* eslint-disable react-hooks/exhaustive-deps */
  const [{ screenLoading: loading }, setLoading] = useReduxState(
    (state) => state.globalData
  );

  useEffect(() => {
    if (loading) {
      window.addEventListener("load", () => {
        setLoading({
          type: "SET_GLOBAL_DATA",
          arg: {
            screenLoading: false,
          },
        });
      });
    } else {
      window.removeEventListener("load", () => {});
    }
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, [loading]);
  return (
    <div className="main">
      <Loader display={loading} />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/rarities">
            <Rarity />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
