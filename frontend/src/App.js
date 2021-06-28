import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormModal";
import SignupFormPage from "./components/SignupFormPage";
import { HomeIndex } from "./components/Home";
import { AddSongPage } from "./components/AddSongPage";
import { ArtistsList } from "./components/ArtistsList";
import { ArtistsDetails } from "./components/ArtistDetails";
import { SongDetails } from "./components/SongDetails";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomeIndex />
          </Route>
          {/* <Route path="/login">
            <LoginForm />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/songs/add'>
            <AddSongPage />
          </Route>
          <Route exact path='/artists'>
            <ArtistsList />
          </Route>
          <Route exact path='/artists/:id'>
            <ArtistsDetails />
          </Route>
          <Route path='/songs/:songId'>
            <SongDetails />
          </Route>
        </Switch>
      )
      }
    </>
  );
}

export default App;
