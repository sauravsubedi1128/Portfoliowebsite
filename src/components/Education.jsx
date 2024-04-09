// Education.js
import React from "react";
import EducationCard from "../layouts/EducationCard";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gray-100">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Education
      </h1>

      <div className="bg-white p-5 rounded-md">
        <EducationCard
          title="Bachelor Degree"
          institution="Advanced College of Engineering and Management"
          course="Bachelor of Computer Application"
          startDate="2078"
          endDate="2082"
          gpa="4.0"
        />
        <EducationCard
          title="NEB Course"
          institution="Diamond Secondary School"
          course="+2 | Science"
          startDate="2076"
          endDate="2078"
          gpa="3.3"
        />
      </div>
    </div>
  );
};

export default Education;
