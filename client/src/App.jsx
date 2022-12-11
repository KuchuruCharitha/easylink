import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';


const apiKey = '9uwxbcp84fr9';
const authToken = localStorage.getItem("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
    client.connectUser({
        id: localStorage.getItem('userId'),
        name: localStorage.getItem('username'),
        fullName: localStorage.getItem('fullName'),
        image: localStorage.getItem('avatarURL'),
        hashedPassword: localStorage.getItem('hashedPassword'),
        phoneNumber: localStorage.getItem('phoneNumber'),
    }, authToken)
}


const App = () => {
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if(!authToken) return <Auth />

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div>
    );
}

export default App;
