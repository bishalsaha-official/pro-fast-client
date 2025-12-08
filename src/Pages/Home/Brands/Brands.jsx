import Marquee from "react-fast-marquee";
import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/amazon_vector.png';
import brand3 from '../../../assets/brands/casio.png';
import brand4 from '../../../assets/brands/moonstar.png';
import brand5 from '../../../assets/brands/start-people 1.png';
import brand6 from '../../../assets/brands/randstad.png';
import brand7 from '../../../assets/brands/start.png';

const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const Brands = () => {
    return (
        <section className="py-16">
            <div className="max-w-10/12 mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#03373D] mb-10">
                    We've helped thousands of sales teams
                </h2>

                {/* Marquee Slider */}
                <Marquee
                    speed={40}           
                    pauseOnHover={true}
                    gradient={false}     
                >
                    <div className="flex items-center gap-16">
                        {logos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="brand"
                                className="w-auto opacity-80 hover:opacity-100 transition"
                            />
                        ))}
                    </div>
                </Marquee>

            </div>
        </section>
    );
};

export default Brands;