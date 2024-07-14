import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PersonCard = ({person}) => {
    const {creator,id} = person
    return (
        <Link href={`/all/${id}`}>
        <div className='flex items-center gap-x-3 py-2 bg-slate-100 px-3'>
            <div className='rounded-full'>
                <Image
                src={`/assets/user1.jpg`}
                width={60}
                height={60}
                alt=''
                className='rounded-full'
                />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                <h3 className='text-xl'>{creator.name || 'Beyond Chat'} </h3>
                <p className='text-xs'>{new Date(creator.updated_at).getUTCHours()}:{new Date(creator.updated_at).getUTCMinutes()}</p>
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
        </Link>
    );
};

export default PersonCard;