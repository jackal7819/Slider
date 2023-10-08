import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { list, longList, shortList } from './data';

import { FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    return (
        <section className='slick-container'>
            <Slider {...settings}>
                {list.map((person) => (
                    <article key={person.id}>
                        <img
                            src={person.image}
                            alt={person.name}
                            className='person-img'
                        />
                        <h5 className='name'>{person.name}</h5>
                        <p className='title'>{person.title}</p>
                        <p className='text'>{person.quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                ))}
            </Slider>
        </section>
    );
};

export default SlickCarousel;
