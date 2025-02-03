//& _________________________  CHATS DATA _______________>

import { CameraIcon, ChartIcon, DocIcon, LocationIcon, MediaIcon, UserIcon } from "./svg";

export const chatData = {
    statuses: [
        {
            id: 1,
            name: 'My status',
            image: require('../asset/images/User-1.png'),
            isMyStatus: true,
        },
        { id: 2, name: 'Adil', image: require('../asset/images/User-2.png') },
        { id: 3, name: 'Marina', image: require('../asset/images/User-3.png') },
        { id: 4, name: 'Dean', image: require('../asset/images/User-1.png') },
        { id: 5, name: 'Max', image: require('../asset/images/User-3.png') },
        { id: 6, name: 'Max', image: require('../asset/images/User-1.png') },
        { id: 7, name: 'Max', image: require('../asset/images/User-2.png') },
    ],
    chats: [
        {
            id: 1,
            name: 'Alex Linderson',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
            unreadCount: 3,
        },
        {
            id: 2,
            name: 'Jack',
            message: 'Don’t miss to attend the meeting.',
            time: '2 min ago',
            image: require('../asset/images/User-3.png'),
            unreadCount: 4,
        },
        {
            id: 3,
            name: 'John Araham',
            message: 'Hey! Can you join the meeting?',
            time: '2 min ago',
            image: require('../asset/images/User-2.png'),
        },
        {
            id: 4,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 5,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-2.png'),
        },
        {
            id: 6,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 7,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 8,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 9,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 10,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 11,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 12,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
        {
            id: 13,
            name: 'Sabila Sayma',
            message: 'How are you today?',
            time: '2 min ago',
            image: require('../asset/images/User-1.png'),
        },
    ],
};
//* ===========================================================>

//& _________________________  MESSAGES DATA _______________>
export const messagesData = [
    { id: '1', sender: 'me', text: 'Hello! Jhon abraham', time: '09:25 AM' },
    {
        id: '2',
        sender: 'other',
        text: 'Hello ! Nazrul How are you?',
        time: '09:25 AM',
    },
    { id: '3', sender: 'me', text: 'You did your job well!', time: '09:25 AM' },
    {
        id: '4',
        sender: 'other',
        text: 'Have a great working week!!',
        time: '09:25 AM',
    },
    { id: '5', sender: 'other', text: 'Hope you like it', time: '09:25 AM' },
    {
        id: '6',
        sender: 'other',
        type: 'voice',
        duration: '00:16',
        time: '09:25 AM',
    },
];
//*=======================================================>

//& _________________________ SHARE CONTENT _______________>

export const shareContents = [
    {
        id: '1',
        icon: <CameraIcon />,
        name: 'camera',
        description: 'Share your files'
    },
    {
        id: '2',
        icon: <DocIcon />,
        name: 'Documents',
        description: 'Share your files'
    },
    {
        id: '3',
        icon: <ChartIcon />,
        name: 'Create a poll',
        description: 'Create a poll for any querry'
    },
    {
        id: '4',
        icon: <MediaIcon />,
        name: 'Media',
        description: 'Share photos and videos'
    },
    {
        id: '5',
        icon: <UserIcon />,
        name: 'Contact',
        description: 'Share your contacts'
    },
    {
        id: '6',
        icon: <LocationIcon />,
        name: 'Location',
        description: 'Share your location'
    }
]

//*=======================================>

// & ______________________> INVITED MEMBERS _____________________>

export const invitedMembers = [
    { id: '1', image: require('../asset/images/User-1.png') },
    { id: '2', image: require('../asset/images/User-1.png') },
    { id: '3', image: require('../asset/images/User-1.png') },
    { id: '4', image: require('../asset/images/User-1.png') },
    { id: '5', image: require('../asset/images/User-1.png') },
];

