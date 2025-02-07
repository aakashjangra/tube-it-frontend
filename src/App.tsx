import clsx from "clsx";
import "./App.css";
import { Button } from "./components/ui/button";
import Layout from "./layout";
import { Landing } from "./landing/page";
import { Home } from "./home/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/page";
import Register from "./register/page";
import PrivateRoute from "./routing/PrivateRoute";
import Subscriptions from "./subscriptions/page";

export default function App() {
  const isAuthenticated = true;

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
              <Route path="/subscriptions" element={
                <Layout>
                  <Subscriptions />
                </Layout>
                } />
          </Route>
        </Routes>
      </Router>
  );
}
