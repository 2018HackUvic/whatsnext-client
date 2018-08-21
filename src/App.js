/*
 src/App.js
*/
import { simpleAction } from './actions/simple'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
class App extends Component {
     simpleAction = (event) => {
       this.props.simpleAction();
     }
 render() {

  return (
   <div className="App">
    <button onClick={this.simpleAction}>Test redux action</button>
    <pre>
      {
        JSON.stringify(this.props)
      }
</pre>
   </div>
   
  );
 }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);