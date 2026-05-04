import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AllBooksDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://abc-books.vercel.app/data.json");
    const books = await res.json();

    const book = books.find(b => b.id == id);


    return (
    //     <div className="w-11/12 mx-auto p-5">
    //     <div className='text-center'>
    //  <div className="relative w-[300px] h-[300px] mx-auto">
    //                 <Image
    //                     src={book.image_url}
    //                     alt={book.title}
    //                     fill
    //                     className="object-cover rounded-xl"
    //                 />
    //                 <Chip className="absolute top-2 right-2 bg-amber-200">
    //                     {book.category}
    //                 </Chip>
    //             </div>
    //         <h1 className="text-2xl font-bold mt-4">{book.title}</h1>
    //         <p className="text-gray-500">{book.author}</p>
    //         <p className="mt-3">{book.description}</p>
    //     </div>
    //     </div>
    <div className="w-11/12 mx-auto py-10">
  <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Image */}
      <div className="relative w-full h-[600px]">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          {book.title}
        </h1>

        <p className="text-gray-500 text-lg">
          ✍️ {book.author}
        </p>

        <div className="h-2 w-16 bg-amber-400 rounded"></div>

        <p className="text-gray-600 leading-relaxed">
          {book.description}
        </p>

        {/* Extra badges */}
        <div className="flex gap-3 pt-4 flex-wrap">

          <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm">
            ⭐ Featured  : {book.category}
          </span>
        </div>
      </div>

    </div>
  </div>
</div>
    );
};

export default AllBooksDetails;