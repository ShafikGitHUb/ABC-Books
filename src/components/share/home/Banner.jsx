import React from 'react';

const Banner = () => {
    return (
 <div className='w-11/12 mx-auto mt-4 mb-4'>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
    <h1 className="text-5xl font-bold">Welcome to ABC Books</h1>
<p className="py-6">
  Discover a world of knowledge, stories, and imagination. Explore our wide collection of books 
  from various genres, find your next favorite read, and enjoy a seamless reading experience.
</p>
    </div>
  </div>
</div>
 </div>
    );
};

export default Banner;