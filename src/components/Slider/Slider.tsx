import './styles.scss';

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__content">
                <h2 className="slider__title">The Power of Simplicity</h2>
                <h4 className="slider__subtitle">
                    Instead of spending time searching for the right app, our AI
                    will bring the right app to you.
                </h4>
                <a href="/" className="slider__link">
                    Learn
                </a>
                <ul className="slider__controls">
                    <li className="slider__dot"></li>
                    <li className="slider__dot"></li>
                    <li className="slider__dot slider__dot--active"></li>
                    <li className="slider__dot"></li>
                    <li className="slider__dot"></li>
                </ul>
            </div>
        </div>
    );
};

export default Slider;
