import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.webp';
import img3 from '../../assets/banner/3.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full  bg-center flex items-center justify-center relative bg-cover"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative text-center text-white z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Elevate Your Business with Gixus
              </h1>
              <p className="text-xl md:text-xl mt-4 max-w-2xl mx-auto">
                Innovative solutions and expert consulting to help you scale and succeed.
              </p>
              <div className="mt-6 space-x-4">
                <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
                  Our Services
                </Link>
                <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-lg text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative text-center text-white z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Vision into Reality
              </h1>
              <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                We bring innovative strategies to turn your ideas into success.
              </p>
              <div className="mt-6 space-x-4">
                <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
                  Our Projects
                </Link>
                <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-lg text-lg">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative text-center text-white z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Achieve Your Business Goals with Us
              </h1>
              <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                Our expert consulting will take your business to new heights.
              </p>
              <div className="mt-6 space-x-4">
                <Link to="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
                  Learn More
                </Link>
                <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-lg text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
