import React from 'react';
import Dot from '../../public/images/dot.png';

const columns = [
    {
        title: 'FOR Founders',
        points: ['Juggling too many roles founder, marketer, community manager, support agent.', 'No time for 24/7 chat every question steals focus from building the actual product.', 'Growth stalls because energy is wasted on repetitive tasks instead of strategy.'],
    },
    {
        title: 'FOR USERS',
        points: ['Questions go unanswered, so they feel ignored or unimportant.', 'Important updates get buried in noisy chats.', 'Onboarding is confusing new members don’t know where to start or what to do.'],
    },
    {
        title: 'FOR COMMUNITY',
        points: ['Endless spam and scams make the space feel unsafe.', 'Chats turn chaotic no structure, no clear guidance, no sense of order.', 'Lack of engagement makes the group feel dead, driving people away.'],
    },
];

const Problem: React.FC = () => (
    <div className='flex flex-col justify-center items-center gap-6 w-full mt-8'>
        <header>
            <h1 className='text-white font-bold text-3xl m-0'>The Problem  PAT Solves</h1>
        </header>
        <p className='text-white text-md m-0 text-center'>
            Most Web3 projects fail at one thing: community management.
        </p>
        <div
            className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full'
        >
            {columns.map((col, idx) => (
                <div key={idx} style={{ borderRadius: '8px', padding: '1rem' }}>
                    <h2 className='text-secondary font-semibold text-xl flex justify-end items-end'>{col.title}<pre className='w-full bg-secondary h-[2px]'></pre></h2>
                        <ul className='space-y-4 mt-6'>
                            {col.points.map((point, i) => (
                                <li key={i} className='text-white flex flex-col space-y-4 justify-start items-start gap-2'>
                                    <img src={Dot} alt="dot" style={{ width: '15px', height: '15px', margin: '0', padding: '0' }} />
                                    <span className='m-0 p-0'>{point}</span>
                                </li>
                            ))}
                        </ul>
                </div>
            ))}
        </div>
        <style>
            {`
                @media (max-width: 900px) {
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr;
                    }
                }
            `}
        </style>
    </div>
);

export default Problem;