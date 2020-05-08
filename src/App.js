import React,{Component} from 'react';
import './App.css';
import "tachyons";
import * as Scroll from 'react-scroll';
import Header from './Header';
import AboutSection from './AboutSection';

class App extends Component{
  render() {
    return (
    	<div>
    <Header />
     <AboutSection/>
      </div>

    );
  }
}
  

export default App;
