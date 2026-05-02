import BookCard from '@/components/BookCard';
import React from 'react';

const BooksData = async() => {
    const res = await fetch("https://abc-books.vercel.app/data.json");
    const data = await res.json();
    const sliceData = data.slice(0,4);
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-bold text-2xl'> Top Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-6'>
                {sliceData.map(Books => <BookCard key={Books.id} Books ={Books}></BookCard>)}
            </div>
        </div>
    );
};

export default BooksData;