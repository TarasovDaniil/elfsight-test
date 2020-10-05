import React, {useEffect} from 'react';
import './App.css';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import ChooseAuthor from "./pages/ChooseAuthor";
import ChooseAlbum from "./pages/ChooseAlbum";
import ChoosePhoto from "./pages/ChoosePhoto";

function App() {
  let location = useLocation();

  useEffect(() => {

    const getScrollPage = () => {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if(scroll > 0){
        document.querySelector('.page__header').setAttribute('style', 'box-shadow: 0px 3px 17px 6px #0000003b;');
      }else{
        document.querySelector('.page__header').setAttribute('style', 'box-shadow: none;');
      }

    };

    window.addEventListener('scroll', getScrollPage);
    getScrollPage();

    return () => {
      window.removeEventListener('scroll', getScrollPage);
    }
  }, [location]);

  return (
        <Switch>
          <Route path="/users/:user/albums">
            <ChooseAlbum/>
          </Route>
          <Route path="/albums/:album/photos">
            <ChoosePhoto/>
          </Route>
          <Route path={["/", "/users"]} exact>
            <ChooseAuthor/>
          </Route>
        </Switch>
  );
}

export default App;
