import Image from 'next/image';
import React from 'react';
import { getAllChat } from './api/getAllChat';
import PersonCard from '@/components/PersonCard';


const AllChat = async() => {
    const {data} = await getAllChat()
    
    
    return (data?.data?.length > 0 && data?.data?.map(person => <PersonCard person={person} key={person.id}/>)
     )
}

export default AllChat;


