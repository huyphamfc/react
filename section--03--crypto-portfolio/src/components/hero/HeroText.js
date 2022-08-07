import { Button } from '../buttons';
import './HeroText.css';


function HeroText() {
    return (
        <div>
            <h2 className="hero__heading">
                A smart crypto portfolio on <span className="hero__brand">HuyCapital</span>
            </h2>
            <p className="hero__title">
                Manage your investment in cryptocurrency visually
            </p>
            <Button>Get Started</Button>
        </div>
    );
}

export default HeroText;