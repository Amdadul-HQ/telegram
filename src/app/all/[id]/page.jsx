'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdMore } from "react-icons/io";

const ChatBox = () => {
    const {id} = useParams()
    const [chat,setChat] = useState([])

    useEffect(()=>{
        fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
        .then(res => res.json())
        .then(data => setChat(data.data))
    },[id])

    return (
        <div>
            <div className='flex items-center justify-between py-2 z-10 sticky top-0 text-white px-4 bg-[#2876a3]'>
                <div className='flex items-center gap-x-3'>
                <IoIosArrowRoundBack className='text-4xl'/>
                    <Image
                    src='/assets/user1.jpg'
                    width={50}
                    height={50}
                    alt=''
                    className='rounded-full'
                    />
                   <div>
                   <h3 className='text-xl font-medium'>Shone Jogi</h3>
                   <p className='text-sm font-light'>last seen {new Date(chat[chat.length-1]?.sender?.updated_at).getUTCHours()}:{new Date(chat[chat.length -1]?.sender?.updated_at).getUTCMinutes()}{(new Date(chat[chat.length - 1]?.sender?.updated_at).getUTCHours) >= 12 ? 'PM' : 'AM'}</p>
                   </div>
                </div>
                <div>
                    <IoMdMore className='text-3xl'/>
                </div>
            </div>
            <div className='w-screen min-h-screen z-0 relative' style={{
                background:"url('/assets/telegrambg.jpeg')",
                backgroundPosition:'center'
            }}>
                {
                    chat.map(item => <div key={item.id} className='py-3'>
                        <div className={`flex items-end gap-x-1 px-1 ${item.sender.name =='BeyondChat' && 'flex-row-reverse'}`}>
                            <div>
                            <Image
                            src='/assets/user1.jpg'
                            width={30}
                            height={30}
                            alt=''
                            className='rounded-full translate-y-3'
                            />
                            </div>
                        <div className={`bg-white max-w-[80%] px-3 pb-5 pt-3  rounded-3xl relative ${item.sender.name =='BeyondChat' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                            <h3 className='text-sm font-medium'>{item.sender.name}</h3>
                            
                            <p className='text-sm font-normal'>{item.message}</p>
                            <p className='text-xs font-normal absolute bottom-1 right-2'>{new Date(item.created_at).getUTCHours()}:{new Date(item.created_at).getUTCMinutes()} {(new Date(item.created_at).getUTCHours) >= 12 ? 'PM' : 'AM'}</p>
                           
                        </div>
                        </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ChatBox;