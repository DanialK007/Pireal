import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './WorkList.module.css';
import Card2 from './Card2';

import work1 from '../img/work1.png';
import work2 from '../img/work2.png';
import work3 from '../img/work3.png';
import work4 from '../img/work4.png';
import work5 from '../img/work5.png';
import work6 from '../img/work6.png';

const works = [
    { title: 'Shopping Bag', detail: 'Branding', img: work1 },
    { title: 'Glass Bottle', detail: 'Print', img: work2 },
    { title: 'Minimal App', detail: 'Design', img: work3 },
    { title: 'Mobile App', detail: 'Design', img: work4 },
    { title: 'Honey Mockup', detail: 'Design', img: work5 },
    { title: 'Minimal Label', detail: 'Branding', img: work6 },
];

function WorkList() {
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredWorks = selectedCategory === 'ALL'
        ? works
        : works.filter(work => work.detail === selectedCategory);

    return (
        <>
            <div className={styles.WorkList}>
                <div className={styles.WorkCatag}>
                    <button className={selectedCategory === 'ALL' ? styles.active : ''} onClick={() => handleCategoryClick('ALL')}>ALL</button>
                    <button className={selectedCategory === 'Branding' ? styles.active : ''} onClick={() => handleCategoryClick('Branding')}>Branding</button>
                    <button className={selectedCategory === 'Print' ? styles.active : ''} onClick={() => handleCategoryClick('Print')}>Print</button>
                    <button className={selectedCategory === 'Design' ? styles.active : ''} onClick={() => handleCategoryClick('Design')}>Design</button>
                </div>
                <TransitionGroup className={styles.WorkGrid}>
                    {filteredWorks.map((work, index) => (
                        <CSSTransition
                            key={index}
                            timeout={500}
                            classNames={{
                                enter: styles.enter,
                                enterActive: styles.enterActive,
                                exit: styles.exit,
                                exitActive: styles.exitActive,
                            }}
                        >
                            <Card2 caption={work.title} detail={work.detail} img={work.img} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </>
    );
}

export default WorkList;