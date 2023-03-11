import Image from 'next/image';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

import exercise from '../public/images/icon-exercise.svg';
import play from '../public/images/icon-play.svg';
import selfCare from '../public/images/icon-self-care.svg';
import social from '../public/images/icon-social.svg';
import study from '../public/images/icon-study.svg';
import work from '../public/images/icon-work.svg';

const images = [
  {
    color: 'bg-c-work',
    svg: work,
    alt: 'briefcase'
  },
  {
    color: 'bg-c-play',
    svg: play,
    alt: 'game controller'
  },
  {
    color: 'bg-c-study',
    svg: study,
    alt: 'open book'
  },
  {
    color: 'bg-c-exercise',
    svg: exercise,
    alt: 'person runinng'
  },
  {
    color: 'bg-c-social',
    svg: social,
    alt: 'message bubble'
  },
  {
    color: 'bg-c-self-care',
    svg: selfCare,
    alt: 'heart with a plus in the middle'
  },
]

const colors = [
  {
    'color': 'hsl(15, 100%, 70%)'
  },
  {
    'color': 'hsl(195, 74%, 62%)'
  },
  {
    'color': 'hsl(348, 100%, 68%)'
  },
  {
    'color': 'hsl(145, 58%, 55%)'
  },
  {
    'color': 'hsl(264, 64%, 52%)'
  },
  {
    'color': 'hsl(43, 84%, 65%)'
  },

]

type TimeFrameCardProps = {
  index: number;
  task: any,
  timeframe: string;
}

export default function TimeFrameCard({ index, task, timeframe }: TimeFrameCardProps) {
  return (
    <article className="rounded-c-radius overflow-hidden cursor-pointer relative h-[160px] lg:h-full">
      <div className='w-full flex justify-end' style={{ backgroundColor: colors[index].color }}>
        <div className='relative w-[74px] h-[70px]'>
          <Image src={images[index].svg} alt={images[index].alt} fill />
        </div>
      </div>
      <div className='px-6 py-7 rounded-c-radius bg-c-dark-blue-500 lg:py-[29px] lg:px-[30px] hover:bg-c-dark-blue-400 absolute left-0 right-0 top-12 bottom-0'>
        <div className='flex items-center justify-between lg:mb-6'>
          <h2 className='font-medium text-18 text-white'>{task.title}</h2>
          <EllipsisHorizontalIcon className='w-5 lg:w-7 text-c-pale-blue hover:text-white cursor-pointer' />
        </div>
        <div className='flex items-center justify-between mt-[6px] lg:flex-col lg:items-start'>
          <h3 className='font-light text-32 text-white lg:text-56'>{task.timeframes[timeframe].current}hrs</h3>
          <p className='font-normal text-15 text-c-pale-blue'>Last Week - {task.timeframes[timeframe].previous}hrs</p>
        </div>
      </div>
    </article>
  );
}