import React,{Component} from 'react';
import "tachyons";
import './AboutSection.css';

class AboutSection extends Component{
  render() {
    return (
     <div className="section1">
     <h1 className="grey pa5"><strong>About Me..</strong></h1>

     <div className="container">
     <img className="ba bw3 roundImg grow rainbowbor" src="logo.jpg" alt="Avatar"/>
     <br></br>

<div className='flex flex-wrap'>

<div className='tc grow bg-light-red br3 pa3 ma3 dib bw2 shadow-5'>
      <p className= 'black w-200 pa3 mr3'>Hello, Im Rivaan Ranawat, a 15 year old web and android developer.
       I develop things that seem cool and revolutionary to me! 
       Im familiar with Java, Javascript, CSS, HTML and Python.
       I own an Instagram account named Optimumetups too which is full of gaming setups and PC inspirations Im highly interested in!
       Im also interested in Math, Physics Cricket and Gaming. Ive played Counter Strike, Fortnite, PUBG, Call Of Duty, Team Fortress 2, Clash Of Clans.
       </p>
</div>
  </div>
      </div>
      </div>

    );
  }
}
  

export default AboutSection;
