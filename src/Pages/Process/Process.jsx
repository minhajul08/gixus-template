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
        <div className="grid grid-cols-12 min-h-full w-full mt-3 relative">
            {/* year of experience */}
            <div className="grid col-span-6 bg-[#1F2B38] ">
                <p className="text-9xl font-bold text-blue-600 mx-auto p-20 font-serif">
                    26 <span className="block text-4xl items-start text-white">Years of Experience</span>
                </p>


            </div>
            {/* progress bar */}
            <div className="bg-[#F7F7F7] grid col-span-6">
                <div className="flex justify-center gap-10">
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
            <div className="w-5/6 top-80 min-h-screen absolute bg-[#FFFFFF] text-center mx-20 flex lg:p-20 shadow-lg rounded-md">
                <div className="w-2/5 ">
                    <h1 className="text-5xl font-bold  ">Building <br /> great future <br /> Together, <br />Be with us</h1>
                </div>
               <div className="w-3/5 p-10 mx-auto">
  {/* Step indicators */}
  <div className="flex items-center justify-center">
    {/* Step 01 */}
    <div className="flex flex-col items-center">
      <span className="bg-[#D8E7EF] rounded-full w-12 h-12 flex items-center justify-center font-bold">01</span>
      <h3 className="mt-3 font-bold text-center">Information Collection</h3>
    </div>

    <hr className="border border-dashed w-32 border-[#919191]" />

    {/* Step 02 */}
    <div className="flex flex-col items-center">
      <span className="bg-[#D8E7EF] rounded-full w-12 h-12 flex items-center justify-center font-bold">02</span>
      <h3 className="mt-3 font-bold text-center">Projection Report Analysis</h3>
    </div>

    <hr className="border border-dashed w-32 border-[#919191]" />

    {/* Step 03 */}
    <div className="flex flex-col items-center">
      <span className="bg-[#D8E7EF] rounded-full w-12 h-12 flex items-center justify-center font-bold">03</span>
      <h3 className="mt-3 font-bold text-center">Consultation Solution</h3>
    </div>
  </div>

  {/* Descriptions Below */}
  <div className="flex items-center justify-center gap-20 mt-5 text-center">
    <p className="w-40 text-sm text-gray-600">
      Excuse Deal say over contain performance from comparison new melancholy themselves.
    </p>
    <p className="w-40 text-sm text-gray-600">
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