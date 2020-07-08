import React from "react";
import Shop from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header-component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    //this.props contains the state
    const { setCurrentUser } = this.props;
    //session persistence :0
    //any changes happen on firebase (including sign in/sign out) ==> it'll cause this
    //returns a boolean, but the unsubscribefromauth is being set to the function
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/*exact means you need exactly this ending of the url for it to route
         It will render all of the Routes that have that path match
         Switch will make it so that ONLY ONE of the routes will be rendered and
         ONLY THE FIRST ONE*/}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  //invoking setCurrentUser with user that is used as the payload
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//no need for state
export default connect(mapStateToProps, mapDispatchToProps)(App);
