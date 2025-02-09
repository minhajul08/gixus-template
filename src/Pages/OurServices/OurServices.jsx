import { useState } from "react";
import img3 from '../../assets/services/1.png';
import img2 from '../../assets/services/2.png'
import img1 from '../../assets/services/3.png'
  const cards = [
    {
        img: `${img1}`,
      title: "Advanced Business Intelligence",

      description: "Seeing rather her you not esteem men settle genius excuse. Deal say over you age devonshire Comparison new ham melancholy son themselves instrument out reasonably.",
    },
    {
        img: `${img2}`,
      title: "Business Research And Development",

      description: "Seeing rather her you not esteem men settle genius excuse. Deal say over you age devonshire Comparison new ham melancholy son themselves instrument out reasonably.",
    },
    {
        img: `${img3}`,
      title: "Digital Project Management System",

      description: "Seeing rather her you not esteem men settle genius excuse. Deal say over you age devonshire Comparison new ham melancholy son themselves instrument out reasonably.",
    },
  ];

const OurServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <div className="text-center space-y-5">
                <p className="text-xl font-semibold uppercase bg-[#D8E7EF] w-40 py-2 mx-auto">Our services</p>
                <p className="text-5xl font-bold">Empower your business <br />with our services.</p>
            </div>
            <div className="flex gap-2 justify-center mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative h-96 w-2/5 p-5 rounded-xl shadow-lg flex flex-col justify-center transition-all duration-500 cursor-pointer space-y-5 border ${
            activeIndex === index ? "w-3/5 " : "  hover:w-3/5"
          }`}
          onMouseEnter={() => setActiveIndex(index)}
        >
           <img src={card.img} alt={card.title} className="w-16 h-16  mb-2" />
          <h3 className="text-2xl font-bold">{card.title}</h3>

          {/* Description - Only the active card shows description */}
          {activeIndex === index && (
            <p className="mt-3 text-[#919191] transition-opacity duration-500 opacity-100">
              {card.description}
            </p>
          )}
        </div>
      ))}
    </div>
        </div>
    );
};

export default OurServices;