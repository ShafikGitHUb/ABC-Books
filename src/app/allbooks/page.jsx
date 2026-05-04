import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooks = async() => {
    const res = await fetch("https://abc-books.vercel.app/data.json");
    const books = await res.json();
    return (
    <div className='w-11/12 mx-auto mt-5 space-y-4
    '>
        <h2 className='font-bold text-2xl'> All Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                
           {
            books.map(Books => <BookCard key={Books.id} Books={Books}></BookCard>)
           } 
        </div>
    </div>
    );
};

export default AllBooks;