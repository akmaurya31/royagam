import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";




//import "./bootstrap.min.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Agam from "./components/agam";
import Roy from "./components/roy";
import Roy1 from "./components/roy1";
class App extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/agam"} className="nav-link">
                Addagam
              </Link>
            </li>

          </div>
        </nav>
     */}
    
     {/* <Agam /> */}


        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/agam" component={Agam} />
            <Route path="/roy" component={Roy} />
            <Route path="/roy1" component={Roy1} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
