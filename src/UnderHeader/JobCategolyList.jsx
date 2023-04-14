import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryList2 from "./JobCategoryList2";

const JobCategolyList = () => {
  const x  = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <p className="bt">Job Category List</p>
      <p className="gg text-center mb-20">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 my-8">
        {x.job_categories.map(singleCard => <JobCategoryList2 key={singleCard.id} singleCard={singleCard}/>)}
       
      </div>
    </div>
  );
};

export default JobCategolyList;

// ont-family: 'Manrope';
// font-style: normal;
// font-weight: 800;
// font-size: 48px;
// line-height: 66px;

// font-weight: 500;
// font-size: 16px;
