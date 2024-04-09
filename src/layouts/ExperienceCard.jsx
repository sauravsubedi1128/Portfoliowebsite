import React, { useState } from "react";

const ExperienceCard = () => {
  const [selectedPosition, setSelectedPosition] = useState("Frontend Development Intern");

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold mb-4">Places I've Worked</h2>
      <div className="space-y-8">
        <div className="flex items-center justify-between bg-gray-200 rounded-t-lg py-2 px-4">
          <button
            onClick={() => handlePositionClick("Frontend Development Intern")}
            className={`px-4 py-2 bg-gray-400 ${
              selectedPosition === "Frontend Development Intern" && "font-bold"
            } rounded-tl-lg`}
          >
            Frontend Development Intern
          </button>
          <button
            onClick={() => handlePositionClick("Digital Marketer")}
            className={`px-4 py-2 bg-gray-400 ${
              selectedPosition === "Digital Marketer" && "font-bold"
            }`}
          >
            Digital Marketer
          </button>
          <button
            onClick={() => handlePositionClick("Blogger")}
            className={`px-4 py-2 bg-gray-400 ${
              selectedPosition === "Blogger" && "font-bold"
            } rounded-tr-lg`}
          >
            Blogger
          </button>
        </div>
        {selectedPosition === "Frontend Development Intern" && (
          <div className="bg-gray-100 rounded-b-lg p-4">
            <div>
              <h3 className="text-xl font-semibold">
                Frontend Development Intern @ Genius System Pvt Ltd
              </h3>
              <ul className="list-disc list-inside">
                <li>Utilized React.js and Redux to contribute to the development and enhancement of frontend features and functionalities.</li>
                <li>Played a pivotal role in identifying, tracking, and resolving frontend-related issues within the systems.</li>
                <li>Fixed issues, both bugs and exceptions faced during development and testing phase.</li>
              </ul>
              <div className="mt-2">From: 2080 (4 Months)</div>
            </div>
          </div>
        )}
        {selectedPosition === "Digital Marketer" && (
          <div className="bg-gray-100 rounded-b-lg p-4">
            <div>
              <h3 className="text-xl font-semibold">
                Digital Marketer @ Mailmeets
              </h3>
              <ul className="list-disc list-inside">
                <li>Designed and coded responsive email templates, ensuring a consistent and appealing brand image across all campaigns.</li>
                <li>Conducted A/B testing of subject lines, content, and visuals to optimize email performance and drive higher engagement.</li>
                <li>Implemented marketing automation workflows to nurture leads and drive customer retention.</li>
              </ul>
              <div className="mt-2">From: 2079 - To: 2080</div>
            </div>
          </div>
        )}
        {selectedPosition === "Blogger" && (
          <div className="bg-gray-100 rounded-b-lg p-4">
            <div>
              <h3 className="text-xl font-semibold">
                Blogger @ Self Employed
              </h3>
              <ul className="list-disc list-inside">
                <li>Consistently produced high-quality and SEO-optimized content, resulting in organic traffic.</li>
                <li>Implemented monetization strategies, including affiliate marketing and ad placements, to generate income from the blog.</li>
                <li>Stayed updated on industry trends and attended relevant conferences and webinars to enhance blogging skills and knowledge.</li>
              </ul>
              <div className="mt-2">From: 2076 - To: 2079</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceCard;
