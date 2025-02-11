import img1 from '../../assets/aboutus/3.jpg'

const Planning = () => {
    return (
       <div className="bg-slate-200  mt-[740px] lg:mt-[315px] p-10 min-h-screen lg:flex gap-20 ">
         <div
        className="hero  lg:w-[450px] h-5/5 items-center rounded-br-[5px]   lg:mt-0"
        style={{
            backgroundImage: `url(${img1})`,
           
        }}>
        <div className="hero-overlay bg-opacity-60 rounded-br-[5px]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md p-10">
            <h1 className="mb-5 text-xl lg:text-3xl font-bold text-justify">Have a view of our <br /> amazing projects with <br /> our clients</h1>
            <p className="mb-5 text-lg text-justify ">
            We’re a creative branding and communications company of creative thinkers, strategists, digital innovators, for your company
            </p>
            <p className="text-2xl text-justify">Satisfaction guarantee <br className="hidden sm:block"/>
            Ontime delivery</p>
          </div>
        </div>
      </div>
      <div>
      <div className="flex gap-20 text-center items-center font-bold mt-5 lg:mt-0">
      <p className="font-medium uppercase">Strategy</p>
      <p className="text-xl lg:text-3xl">Digital business planning</p>
      </div>
      <br />
      {/* <img src={} alt="" /> */}
      <hr className="border border-solid w-full border-black" />
      <br />
      <div className="flex gap-12 text-center items-center font-bold">
      <p className="font-medium uppercase">Partnership</p>
      <p className="text-xl lg:text-3xl">Business Program Management</p>
      </div>
      <br />
      <hr className="border border-solid w-full border-black" />
      <br />
      <div className="flex gap-20 text-center items-center font-bold">
      <p className="font-medium uppercase">Branding</p>
      <p className="text-xl lg:text-3xl">Strategy development</p>
      
      </div>
      <br />
      <hr className="border border-solid w-full border-black" />
      <button className='border p-2 rounded-lg hover:bg-[#1D4ED8] hover:text-white hover:border-0 border-slate-900 my-20 text-center mx-auto'>More Info</button>
      </div> 
     
       </div>
    );
};

export default Planning;