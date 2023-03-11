'use client';
import { useState } from 'react';
import data from '../data.json';
import Profile from '@/components/Profile';
import TimeFrameCard from '@/components/TimeFrameCard';

export default function Home() {
  const [timeframe, setTimeframe] = useState('daily');

  const handleClick = (value: string) => setTimeframe(value);

  return (
    <main className="w-full min-h-screen max-w-[1440px] mx-auto flex items-center justify-center px-6 lg:px-40 py-10 min-w-[375px]">
      <section className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 lg:gap-[30px]">
        <Profile
          className="row-span-full"
          onFilter={handleClick}
          timeframe={timeframe}
        />
        {data.map((item, index) => (
          <TimeFrameCard
            key={index}
            index={index}
            task={item}
            timeframe={timeframe}
          />
        ))}
      </section>
    </main>
  );
}
