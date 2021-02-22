
import React from "react";
import { Route, Redirect, Switch  } from "react-router-dom";
import Altarware from "./body/Altarware";
import Artwork from "./body/Artwork";
import Home from "./body/Home";
import Vestments from "./body/Vestments";


const Body = () => {


  return (
    <div className="body">
      <Redirect exact from="/" to="/home" />
          <Switch style={{backgroundColor: "initial"}} >
            <Route exact path="/home" component={Home} />
            <Route exact path="/vestments" component={Vestments} />
            <Route exact path="/altarware" component={Altarware} />
            <Route exact path="/artwork" component={Artwork} />
          </Switch>
    </div>
  );
};

export default Body;
