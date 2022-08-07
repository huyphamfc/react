import srcImg from '../../img/hero.png';
import './HeroImg.css';


function HeroImg() {
    return (
        <div className='hero__img'>
            <img
                src={srcImg}
                alt='Bitcoin'
            />
        </div>
    );
}

export default HeroImg;