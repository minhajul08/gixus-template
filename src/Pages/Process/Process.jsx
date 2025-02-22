import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
    { label: "Business Development", value: 65 },
    { label: "Investment Analysis", value: 84 },
];

const Process = () => {
    const [progress, setProgress] = useState({});

    useEffect(() => {

        setTimeout(() => {
            setProgress({
                "Business Development": 65,
                "Investment Analysis": 84,
            });
        }, 1000);
    }, []);

    return (
        <div className="grid lg:grid-cols-12 h-[625px] w-full mt-4 lg:mt-3 lg:relative mx-5 lg:mx-0">
            {/* year of experience */}
            <div className="grid col-span-6 bg-[#1F2B38]  mt-2 lg:mt-0">
                <p className="text-9xl font-bold text-blue-600  p-5 lg:p-20 font-serif text-center ">
                    26 <span className="block text-4xl lg:items-start text-white">Years of Experience</span>
                </p>


            </div>
            {/* progress bar */}
            <div className="bg-[#F7F7F7] grid col-span-6 mt-1 p-2 lg:mt-2">
                <div className="lg:flex justify-center gap-10 space-y-4 lg:space-y-0">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 lg:mt-28 font-bold font-serif">
                                <CircularProgressbar
                                    value={progress[skill.label] || 0}
                                    text={`${progress[skill.label] || 0}%`}
                                    styles={buildStyles({
                                        textColor: "#000",
                                        pathColor: "rgb(113, 41, 214)",
                                        trailColor: "#e5e7eb",
                                        pathTransitionDuration: 1.5,
                                    })}
                                />
                            </div>
                            <p className="text-center mt-2 font-bold ">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-5/6 lg:top-80 lg:min-h-screen lg:absolute bg-[#FFFFFF] text-center  mx-3 lg:mx-20 lg:flex p-8 lg:p-20 shadow-lg rounded-md ">
                <div className="lg:w-3/5 ">
                    <h1 className="text-2xl lg:text-5xl font-bold ">Building <br className="hidden sm:block" /> great future <br className="hidden sm:block"/> Together, <br/>Be with us</h1>
                </div>
               <div className="w-3/5 p-10 mx-auto">
  {/* Step indicators */}
  <div className="flex flex-col lg:flex-row items-center justify-center ">
    {/* Step 01 */}
    <div className="flex flex-col  items-center">
      <span className="bg-[#D8E7EF] rounded-full w-12 h-12 flex items-center justify-center font-bold">01</span>
      <h3 className="mt-3 font-bold text-center">Information Collection</h3>
      <p className="w-40 text-sm text-gray-600 lg:hidden">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
    </div>

    <hr className="border border-dashed w-32 border-[#919191] my-3 lg:my-0"  />

    {/* Step 02 */}
    <div className="flex flex-col items-center">
      <span className="bg-[#D8E7EF] rounded-full w-12 h-12 flex items-center justify-center font-bold">02</span>
      <h3 className="mt-3 font-bold text-center">Projection Report Analysis</h3>
      <p className="w-40 text-sm text-gray-600 lg:hidden">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
    </div>

    <hr className="border border-dashed w-32 border-[#919191] my-3 lg:my-0" />

    {/* Step 03 */}
    <div className="flex flex-col items-center">
      <span className="bg-[#D8E7EF] rounded-full w-12 h-12 flex items-center justify-center font-bold">03</span>
      <h3 className="mt-3 font-bold text-center">Consultation Solution</h3>
      <p className="w-40 text-sm text-gray-600 lg:hidden">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
    </div>
  </div>

  {/* Descriptions Below */}
  <div className="hidden lg:flex  items-center justify-center lg:gap-20 mt-5 text-center ">
    <p className="w-40 text-sm text-gray-600 ">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
    <p className="w-40 text-sm text-gray-600 ">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
    <p className="w-40 text-sm text-gray-600">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
  </div>
</div>

            </div>


        </div>
    );
};

export default Process;