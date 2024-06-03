import styles from './Page.module.css';
import Card from './Components/Card';

import home1 from './img/promo-home-1.jpg';
import home2 from './img/promo-home-2.jpg';
import home3 from './img/promo-home-3.jpg';
import home4 from './img/promo-home-4.jpg';
import home5 from './img/promo-home-5.jpg';
import home6 from './img/promo-home-6.jpg';
import home7 from './img/promo-home-7.jpg';
import home8 from './img/promo-home-8.jpg';
import home9 from './img/promo-home-9.jpg';

import useIntersectionObserver from '../useIntersectionObserver';
import observer from '../useIntersectionObserver.module.css';

const cards = [
    { img: home1, title: 'Minimal Portfolio' },
    { img: home2, title: 'Masonary Portfolio' },
    { img: home3, title: 'Classic Portfolio' },
    { img: home4, title: 'Freelancer Portfolio' },
    { img: home5, title: 'Slider Home' },
    { img: home6, title: 'Fullscreen Slider' },
    { img: home7, title: 'Agency Portfolio' },
    { img: home8, title: 'Video Home' },
    { img: home9, title: 'Classic Dark' },
];

function Page() {
    return (
        <div className={styles.Page}>
            <h1>Awesome Home Pages</h1>
            <p>Modern, Minimal & Creative Design</p>
            <div className={styles.PageGrid}>
                {cards.map((card, index) => (
                    <CardWrapper key={index} card={card} />
                ))}
            </div>
            <div className={styles.Gap}></div> 
        </div>
    );
}

const CardWrapper = ({ card }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${observer.CardWrapper} ${isVisible ? observer.visible : ''}`}>
            <Card image={card.img} title={card.title} />
        </div>
    );
};

export default Page;
