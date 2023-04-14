import React from 'react';

const JobCategoryList2 = ({singleCard}) => {
    const {id, image, title, available_posts} = singleCard;
    return (
        <div>
             <div className="h-[263px] w-[311px] p-bg flex flex-col justify-evenly rounded p-10">
         <div className='w-[70px] h-[70px] bg-purple-100 rounded-md flex items-center justify-center'><img className='w-[40px] h-[40px] object-cover' src={image} alt="" /></div>
          <div>
              <p className="bt-1">{title}</p>
              <p className="gg">{available_posts} Jobs Available</p>
          </div>
        </div>
        
        </div>
    );
};

export default JobCategoryList2;