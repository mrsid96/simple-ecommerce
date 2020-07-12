import React, { Component } from 'react';
import "./App.css"
import { HomePage } from "./pages/Homepage/homepage.component"
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";
import { Authentication } from "./pages/Authentication/authentication.component"
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component {

  unsubscribeFromAuth = undefined;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : <Authentication />} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = ({
  user
}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
