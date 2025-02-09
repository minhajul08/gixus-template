import img1 from '../../assets/aboutus/1.jpg'
import img2 from '../../assets/aboutus/2.png'
const AboutUs = () => {
    return (
        <div className='grid grid-cols-9 mx-10'>
            <div className='grid col-span-5 '>
                <img className='rounded-lg' src={img1} alt="" />
            </div>
            <div className='grid col-span-4 bg-[#F7F7F7] p-8'>
                <p className='text-6xl font-semibold '>Meet the  <br /> executives driving <br /> our success.</p>
                <p className='text-balance text-gray-500'>Businesses operate in various industries, including technology, finance, healthcare, retail, and manufacturing, among others. They play a crucial role in the economy by providing goods, services, and employment never fruit up Pasture imagin..</p>
                <hr></hr>
                <div className='flex mt-3 font-bold'>
                    <div className='flex'>
                    <img className='w-16 h-16 mr-4' src={img2} alt="" />
                    <span className='text-xl'>Award Winning Company</span>
                    </div>
                    <div className='flex'>
                        <p className='text-5xl mr-5 text-blue-600'>3.8X</p>
                        <p className='text-xl'>Economical growth</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;