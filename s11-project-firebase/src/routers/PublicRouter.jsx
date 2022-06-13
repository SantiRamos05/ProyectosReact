import React from "react";
import { Navigate, Route} from 'react-router-dom'

const PublicRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Navigate to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter;
