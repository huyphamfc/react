import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

import './Hero.css';


function Hero() {
    return (
        <section className='hero'>
            <HeroText />
            <HeroImg />
        </section>
    );
}

export default Hero;