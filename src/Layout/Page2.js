import styles from './Page.module.css';
import Card from './Components/Card';

import page1 from './img/promo-page-1.jpg';
import page2 from './img/promo-page-2.jpg';
import page3 from './img/promo-page-3.jpg';
import page4 from './img/promo-page-4.jpg';
import page5 from './img/promo-page-5.jpg';
import page6 from './img/promo-page-6.jpg';

import header1 from './img/promo-header-1.jpg';
import header2 from './img/promo-header-2.jpg';
import header3 from './img/promo-header-3.jpg';

import useIntersectionObserver from '../useIntersectionObserver';
import observer from '../useIntersectionObserver.module.css';

const pages = [
    { img: page1, title: "Blog Masonary" },
    { img: page2, title: "Single Post" },
    { img: page3, title: "About Us" },
    { img: page4, title: "About Me" },
    { img: page5, title: "Our Services" },
    { img: page6, title: "Contact Page" },
];

const headers = [
    { img: header1, title: "Left Logo" },
    { img: header2, title: "Centered Logo" },
    { img: header3, title: "Overlay Menu" },
];

const CardWrapper = ({ item }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${observer.CardWrapper} ${isVisible ? observer.visible : ''}`}>
            <Card image={item.img} title={item.title} />
        </div>
    );
};

function Page2() {
    return (
        <div className={styles.Page}>
            <h1>Functional Inner Pages</h1>
            <p>Practical Inner Pages for all your needs</p>
            <div className={styles.PageGrid}>
                {pages.map((page, index) => (
                    <CardWrapper key={index} item={page} />
                ))}
            </div>

            <div className={styles.PageDivider}></div>

            <h1>Modern Header Styles</h1>
            <p>Choose the Modern Header for your website</p>
            <div className={styles.PageGrid}>
                {headers.map((header, index) => (
                    <CardWrapper key={index} item={header} />
                ))}
            </div>
        </div>
    );
}

export default Page2;