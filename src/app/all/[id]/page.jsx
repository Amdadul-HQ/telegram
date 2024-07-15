'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const ChatBox = () => {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      
    const router = useRouter()
    const handleBack = ()=>{
        router.back();
    }
    const {id} = useParams()
    const [chat,setChat] = useState([])
    const [showmic,setShowmic] = useState(false)
    const handleInput = (e)=>{
        if((e.target.value).length>0){
            setShowmic(true)
        }
        else{
            setShowmic(false)
        }
    }

    useEffect(()=>{
        fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
        .then(res => res.json())
        .then(data => setChat(data.data))
    },[id])

    return (
        <div>
            <div className='flex items-center justify-between py-2 z-10 sticky top-0 text-white px-4 dark:bg-slate-900 bg-[#2876a3]'>
                <div className='flex items-center gap-x-3'>
                <IoIosArrowRoundBack onClick={handleBack} className='text-4xl'/>
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
            <div className='max-w-screen min-h-screen bg-[url("/assets/telegrambg.jpeg")] bg-cover bg-fixed bg-no-repeat z-0 relative' style={{
           
                
            }}>
                {
                    chat.map(item => <div key={item.id} className='py-3'>
                        <div className='sticky top-0'>
                            <p className='text-center text-white my-3 bg-[#7676801F] w-fit px-3 py-2 rounded-3xl mx-auto'>{new Date(item.created_at).getDate()} {monthNames[new Date(item.created_at).getUTCMonth()]}</p>
                        </div>
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
                        <div className={`bg-white dark:bg-slate-900 dark:text-slate-100 max-w-[80%] px-3 pb-5 pt-3  rounded-3xl relative ${item.sender.name =='BeyondChat' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                            <h3 className='text-sm font-medium'>{item.sender.name}</h3>
                            
                            <p className='text-sm font-normal'>{item.message}</p>
                            <p className='text-xs font-normal absolute bottom-1 right-2'>{new Date(item.created_at).getUTCHours()}:{new Date(item.created_at).getUTCMinutes()} {(new Date(item.created_at).getUTCHours) >= 12 ? 'PM' : 'AM'}</p>
                           
                        </div>
                        </div>
                        </div>)
                }
                <div className='bg-white dark:bg-slate-900 dark:text-slate-100 flex items-center px-4 py-2 z-50 sticky bottom-0 w-full mt-4'>
                    <div className='px-2'>
                        <label htmlFor='attach'><ImAttachment className='text-xl'/></label>
                    <input id='attach' type='file' className='hidden'/>
                    </div>
                    <input onChange={handleInput} type="text" className='block h-[50px] w-full dark:bg-slate-900 outline-none px-4' placeholder='Write a message' />
                    <div className='flex items-center gap-x-2'>
                        <BsEmojiSmile className='text-xl'/>
                        {
                            showmic ? <FaTelegram className='text-blue-400 text-xl'/> : <HiOutlineMicrophone className='text-xl'/>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;