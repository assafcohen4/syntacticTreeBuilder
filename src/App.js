import React, { Component, Fragment } from 'react';
import './App.css';
import { Layout } from './containers/Layout/Layout';
import Tree from './containers/Tree/Tree'
import SentenceField from './containers/Layout/UI/SentenceField/SentenceField'
import TreeLogic from './components/treeLogic'

import Navbar from './containers/Layout/UI/Navbar/Navbar';
import { Button } from '../node_modules/@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Navbar/>
          <br/><br/>
          <Tree/>
         <SentenceField />
         <input type='text' value= {TreeLogic("[Hello all my friends here]")}/>
         <br/>
         <input type='text' value= {TreeLogic("[Hello all my friends] [here]")}/>
         <br/>
         <input type='text' value= {TreeLogic("[Hello all [my friends]] here")}/>
         <Button  variant="contained" color="primary" style={{marginLeft: '5%'}}>Save Tree</Button>
         <Button  variant="contained" color="primary" style={{marginLeft: '5%'}}>Start Over</Button>
        </Layout>
      </div>
    );
  }
}

export default App;


