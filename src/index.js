import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Content from './Components/Content'
import Projects from './Components/Projects'
function App(){
    return(
     <div>
      <Header/>
      <Intro/>
      <Content/>
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
