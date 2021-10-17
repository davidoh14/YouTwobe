import React from "react";
import { Route, Switch } from "react-router";
import Home from "./home";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PageNotFound from "./session/page_not_found";
import VideoShowContainer from "./videos/video_show_container"
import VideoUploadFormContainer from "./videos/video_upload_form_container";


const App = () => (
  <div>
    <header>
      <Switch>
        <ProtectedRoute path='/upload/' component={VideoUploadFormContainer}/>
        <Route path='/watch/:videoId' component={VideoShowContainer}/>
        <AuthRoute path="/login" component={login_form_container} />
        <AuthRoute path="/signup" component={signup_form_container} />
        <Route exact path='/' component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </header>
  </div>
);

export default App;
