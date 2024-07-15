import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PersonCard = ({person}) => {
    const {creator,id} = person
    return (
        <Link href={`/all/${id}`}>
        <div className='flex items-center gap-x-3 py-2 dark:bg-slate-900 dark:border-none px-3 w-full'>
            <div className='rounded-full'>
                <Image
                src={`/assets/user1.jpg`}
                width={50}
                height={50}
                alt=''
                className='rounded-full'
                />
            </div>
            <div className='flex-1'>
                <div className='flex justify-between  items-center'>
                <h3 className='text-lg font-medium text-black dark:text-white'>{creator.name || 'Beyond Chat'} </h3>
                <p className='text-xs text-gray-400'>{new Date(creator.updated_at).getUTCHours()}:{new Date(creator.updated_at).getUTCMinutes()}</p>
                </div>
                <p className='text-sm text-blue-400'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
        </Link>
    );
};

export default PersonCard;