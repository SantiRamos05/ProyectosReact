import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Route, Router, Routes } from 'react-router-dom'
import AppScreen from '../pages/AppScreen'
import firebase from "firebase/compat/app"
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import AuthRouter from './AuthRouter'
import { login } from '../actions/auth'

const AppRouter = () => {
  const dispatch = useDispatch;

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);

       {/* const nominaData = await loadData(user.uid);

      dispatch(leerRegistros(nominaData)); */}
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Route>
        <Route path="/auth" element={<PublicRouter><AuthRouter /></PublicRouter>} log={log}/>
        <Route path="*" element={<PrivateRouter><AppScreen/></PrivateRouter>} log={log}/>
        {/*<PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" log={log} component={AppScreen} /> */}
      </Route>
    </Router>
  );
};

export default AppRouter;