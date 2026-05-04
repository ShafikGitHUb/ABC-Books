import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import {Chip} from "@heroui/react";

const AllBooksDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://abc-books.vercel.app/data.json");
    const books = await res.json();

    const book = books.find(b => b.id == id);


    return (
        <div className="w-11/12 mx-auto p-5">
        <div className='text-center'>
     <div className="relative w-[300px] h-[300px] mx-auto">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                    <Chip className="absolute top-2 right-2 bg-amber-200">
                        {book.category}
                    </Chip>
                </div>
            <h1 className="text-2xl font-bold mt-4">{book.title}</h1>
            <p className="text-gray-500">{book.author}</p>
            <p className="mt-3">{book.description}</p>
        </div>
        </div>
    );
};

export default AllBooksDetails;