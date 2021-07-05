import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
// import Counter from "./features/counter/Counter";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

// Lazy load - Code splitting
const Counter = lazy(() => import("./features/counter/Counter"));
const Province = lazy(() => import("./features/province/Province"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/counters" component={Counter} />
            <PrivateRoute path="/provinces" component={Province} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
