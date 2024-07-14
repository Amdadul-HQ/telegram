'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const ChatBox = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h1>hello from chat box</h1>
        </div>
    );
};

export default ChatBox;