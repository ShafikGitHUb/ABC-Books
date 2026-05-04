import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import {Chip} from "@heroui/react";
import Link from 'next/link';

const BookCard = ({Books}) => {
    const {id,title,author,image_url,description,category} = Books;
    return (


 <Card className='border rounded-xl text-center'>
                        <div className='space-y-2'>
               <div className='relative w-full aspect-square'> <Image className='rounded-xl object-cover' src={image_url} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='bookimg' ></Image><Chip className='absolute top-3 right-3 bg-amber-200'>{category}</Chip>
                 
               </div>
              
                <div><h2 className='font-semibold text-xl'>{title}</h2>
                <h2 className='text-gray-500'>{author}</h2></div>
                <Link href={`/allbooks/${id}`}>  <Button variant='outline' className={"w-full"}>Description</Button></Link>
            </div>
        </Card>

       
    );
};

export default BookCard;