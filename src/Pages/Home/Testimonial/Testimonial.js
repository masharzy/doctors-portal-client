import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, testimonialText, authorName, authorLocation } = testimonial;
  console.log(testimonial);
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="card shadow-xl p-9">
        <div className="testimonial-card-content">
          <p className="text-base mb-9">{testimonialText}</p>
          <div className="flex justify-between items-center">
            <div className="testimonial-card-footer flex items-center">
              <div className="testimonial-card-image">
                <img
                  className="w-[75px] h-[75px] object-cover rounded-full border-2 p-1 border-secondary"
                  src={img}
                  alt=""
                />
              </div>
              <div className="author ml-3">
                <h4 className="font-bold text-accent text-xl">{authorName}</h4>
                <p className="text-black text-base">{authorLocation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
