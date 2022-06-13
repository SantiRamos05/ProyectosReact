import React from "react";
import { Navigate, Route} from 'react-router-dom'

const PrivateRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      element={(props) =>
        log ? <Component {...props} /> : <Navigate to="/auth/login" />
      }
    />
  );
};

export default PrivateRouter;