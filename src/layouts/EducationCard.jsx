// EducationCard.js
import React from "react";

const EducationCard = (props) => {
  return (
    <div className="flex flex-col lg:flex-row py-4">
      <div className="w-full lg:w-2/4">
        <h2 className="font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p className="text-gray-600">{props.institution}</p>
          <p className="text-gray-600">{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <div className="lg:pl-8 mt-4 lg:mt-0">
        <h2 className="font-semibold">{props.course}</h2>
        <p className="mt-2 text-gray-700 max-w-lg">{props.title === "Bachelor Degree" ? (
          <>
            This program provided a thorough understanding of {props.course.toLowerCase()} and practical field skills. Engaging in diverse projects at {props.institution} enriched my learning. Achieving a GPA of {props.gpa} showcases my academic dedication.
          </>
        ) : (
          <>
            My experience at {props.institution} was enriching. I gained extensive knowledge in {props.course.toLowerCase()} and honed my skills through various projects. A GPA of {props.gpa} reflects my commitment to excellence.
          </>
        )}</p>
        <div className="bg-gray-600 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
