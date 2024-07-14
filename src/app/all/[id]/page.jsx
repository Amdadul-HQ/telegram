'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";


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
            <div>
                <IoIosArrowRoundBack/>
                <div>
                    <Image
                    src='/assets/user1.jpg'
                    width={60}
                    height={60}
                    alt=''
                    className='rounded-full'
                    />
                   <div>
                   <h3 className='text-xl'>Shone Jogi</h3>
                   <p>{chat?.length} members,10 online</p>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default ChatBox;