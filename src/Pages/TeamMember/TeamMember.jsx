import img1 from '../../assets/team/2.jpg';
import img2 from '../../assets/team/3.jpg';
import img3 from '../../assets/team/4.jpg';
import img4 from '../../assets/team/6.jpg';
import img5 from '../../assets/team/7.jpg';
import img6 from '../../assets/team/9.jpg';
const cards = [
  {
    img: img1,
    role: "CEO & Founder",
    name:"Aleesha Brown",
  },
  {
    img: img2,
    role: "Product Manager",
    name: "Kevin Martin",
  },
  {
    img: img3,
   role: "Financial Consultant",
    name:"Sarah Albert",
  },
  {
    img: img4,
   role: "Developer",
    name:"Sarah Albert",
  },
  {
    img: img5,
   role: "Co Founder",
    name:"Kamal Abraham",
  },
  {
    img: img6,
   role: "Marketing Leader",
    name:"Daniyel Joe",
  },
];

const TeamMember = () => {
    return (
        <div>
              <div className="text-center space-y-5 mt-5">
                <p className="text-xl font-semibold uppercase bg-[#D8E7EF] w-44 py-2 mx-auto">Team Members</p>
                <p className="text-5xl font-bold">Meet the talented team <br />
                from our company</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 '>
                {
                    cards.map (card => <div key={card.role}>
                          <img className='w-80 mx-auto lg:mx-0' src={card.img} alt="" />
                          <div className='text-center lg:text-start'>
                            <p className='text-lg text-gray-500 mt-3'>{card.role}</p>
                            <p className='text-xl font-bold'>{card.name}</p>
                          </div>
                    </div>)
                }
            </div>
            
            
        </div>
    );
};

export default TeamMember;