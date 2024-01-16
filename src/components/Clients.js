import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export default function Clients() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Container>
                <h1 className='text-center text-golden fw-bold'>
                    Our Awesome Clients
                </h1><br />
                <Carousel
                    responsive={responsive}
                    arrows={true}
                    renderButtonGroupOutside={true}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    transitionDuration={4000}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <img src="/logos/roopam.png" alt="Roopam by Somsons" className="clients-slider" />
                    <img src="/logos/rg-wealth.jpg" alt="RG Wealth" className="clients-slider" />
                    <img src="/logos/lakme.png" alt="Lakme" className="clients-slider" />
                    <img src="/logos/vikas.png" alt="Vikas Bansal & Associates" className="clients-slider" />
                    <img src="/logos/gtech.png" alt="Gtech Mansa" className="clients-slider" />
                    <img src="/logos/recode7.png" alt="Recode7" style={{ marginTop: '18px' }} className="clients-slider" />
                </Carousel>
                {/*<div className="row mt-2 mb-4">
                    <div className="col-lg-12 mt--10">
                        <ul className="brand-list brand-style-2 variation-2">
                            <li>
                                <img src="/logos/roopam.png" alt="Roopam by Somsons" />
                            </li>
                            <li>
                                <img src="/logos/rg-wealth.jpg" alt="RG Wealth" />
                            </li>
                            <li>
                                <img src="/logos/lakme.png" alt="Lakme" />
                            </li>
                            <li>
                                <img src="/logos/vikas.png" alt="Vikas Bansal & Associates" />
                            </li>
                            <li>
                                <img src="/logos/gtech.png" alt="Gtech Mansa" />
                            </li>
                            <li>
                                <img src="/logos/recode7.png" alt="Recode7" style={{ marginTop: '18px' }} />
                            </li>
                        </ul>
                    </div>
                </div>*/}
            </Container>
        </>
    )
}