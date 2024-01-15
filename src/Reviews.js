import { Container, Row } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import Data from './ReviewD';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Review() {

    
    const Option = {
        item: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        dots: false,
        margin: 0,

        responsive: {
            1200: {
                items: 3,
            },
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },

            520: {
                items: 1,
            },

            468: {
                items: 1,

            },
            320: {
                items: 1,

            },

        },
    
     
}
return (
    <Container className="mt-5">
        <Row className="mt-5">
            <h5 className=" fs-1 text-center mb-5">Reviews</h5>
            <OwlCarousel className='owl-theme' {...Option}>
                {Data.map((val) => (
                    <div key={val.id} className=''>
                        <div className='text-align-center'>
                            <div className="item-card text-center text-white" style={{ maxWidth: "300px", margin: "auto" }}>
                                <img src={val.User} className="rounded-circle border border-4 border-warning mx-auto" style={{ maxWidth: "120px" }} alt={val.name} />
                                <div className="item-card-content bg-danger px-3 py-5 text-white mt-n1 mx-3" style={{ boxShadow: "10px 10px rgb(217,217,217)" }}>
                                    <h5 className="mt-3 card-title pb-2 mb-4 border-warning border-bottom border-2 ">{val.name}</h5>
                                    <div>
                                        {
                                            (() => {
                                                const stars = [];
                                                for (let i = 0; i < val.rating; i++) {
                                                    stars.push(<StarIcon key={i} className="text-warning" />);
                                                }
                                                return stars;
                                            })()
                                        }
                                        {
                                            (() => {
                                                const star2 = [];
                                                for (let j = 0; j < val.rating2; j++) {
                                                    star2.push(<StarIcon key={j} />);
                                                }
                                                return star2;
                                            })()
                                        }

                                    </div>
                                    <p className="mb-0 fs-6">{val.review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </Row>
    </Container>
);
}

export default Review;
