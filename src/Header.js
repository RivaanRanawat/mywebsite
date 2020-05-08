import React,{Component} from 'react';
import "tachyons";
import './Header.css';
import Tilt from 'react-tilt';
import { Link, animateScroll as scroll } from "react-scroll";
import Typical from 'react-typical';
class Header extends Component{
  render() {
    return (
    <div className="conatiner">
    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
    <img className="dpF" src="dp.jpeg" className="ba bw3 grow" />
    </Tilt>
      <h4>Hello, my name is</h4>
      <h1 className='f-headline lh-solid ph7 rainbow'><b>Rivaan Ranawat.</b></h1>
      <div class="vl">
      <Typical
        className="typ"
        steps={['I am a 15 year old web and android application developer', 500, 'I reside in India', 500, 'I am a PC enthusiast!', 500, 'Know More About me!', 500]}
        loop={Infinity}
        wrapper="p"
      />
      
      <Link
      activeClass="active"
      to="section1"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}>
      <button className="grow" variant="primary" size="lg" active>About Me</button>{' '}
       </Link>
      </div>
    </div>
    );
  }
}
  

export default Header;