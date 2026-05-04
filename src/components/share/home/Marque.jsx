"use client";

import Marquee from "react-fast-marquee";

const Marque = ({ data }) => {
  return (
    <div className='w-11/12 mx-auto py-1  bg-gray-100  shadow-sm mb-8'>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {data?.map(book => (
          <div
            key={book.id}
            className="mx-6 px-4 py-2 flex items-center gap-2"
          >
            <span className="font-semibold text-blue-600">
              {book.title}
            </span>
            <span className="text-gray-500">by</span>
            <span className="font-medium text-gray-800">
              {book.author}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;