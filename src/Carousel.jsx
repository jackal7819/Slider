import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { list, longList, shortList } from './data';

import { FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const Carousel = () => {
    const [people, setPeople] = useState(list);
    const [currentPerson, setCurrentPerson] = useState(0);

    const prevSlide = () => {
        if (currentPerson === 0) {
            setCurrentPerson(people.length - 1);
        } else {
            setCurrentPerson((currentPerson) => currentPerson - 1);
        }
    }

    const nextSlide = () => {
        if (currentPerson === people.length - 1) {
            setCurrentPerson(0);
        } else {
            setCurrentPerson((currentPerson) => currentPerson + 1);
        }
    };

    return (
        <section className='slider-container'>
            {people.map((person, personIndex) => (
                <article
                    key={person.id}
                    className='slide'
                    style={{
                        transform: `translateX(${100*(personIndex - currentPerson)}%)`,
                    }}>
                    <img
                        src={person.image}
                        alt={person.name}
                        className='person-img'
                    />
                    <h5 className='name'>{person.name}</h5>
                    <p className='title'>{person.title}</p>
                    <p className='text'>{person.quote}</p>
                    <FaQuoteRight className='icon' />
                    <button className='prev' onClick={prevSlide}>
                        <FaChevronLeft />
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <FaChevronRight />
                    </button>
                </article>
            ))}
        </section>
    );
}
                
export default Carousel;
