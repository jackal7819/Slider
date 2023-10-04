import { list, longList, shortList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Carousel = () => {
    const [people, setPeople] = useState(shortList);
    const prevSlide = () => {};
    const nextSlide = () => {};

    return (
        <section className='slider-container'>
            {people.map((person) => (
                <article key={person.id} className='slide'>
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
};

export default Carousel;
