'use client';
import Image from 'next/image';
import cn from 'classnames';
import profilePic from '../public/images/image-jeremy.png';

type ProfileProps = {
  className: string;
  onFilter: any;
  timeframe: string;
};

type TabProps = {
  className: string;
  name: string;
  onFilter: any;
};

const Tab = ({ className, name, onFilter }: TabProps) => {
  return (
    <li
      className={cn(
        'font-normal text-18 text-center w-full lg:text-start cursor-pointer hover:text-white',
        className
      )}
      onClick={onFilter}
    >
      {name}
    </li>
  );
};

export default function Profile({
  className,
  onFilter,
  timeframe
}: ProfileProps) {
  const isActive = (value: string) =>
    timeframe === value ? 'text-white' : 'text-c-dark-blue-300';
  return (
    <aside className={cn('rounded-c-radius bg-c-dark-blue-500', className)}>
      <div className="flex items-center justify-center px-8 py-9 lg:pb-20 rounded-c-radius bg-c-blue gap-5 lg:flex-col lg:gap-[43px] lg:items-start">
        <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden border-[3px] border-white lg:w-[78px] lg:h-[78px]">
          <Image
            src={profilePic}
            alt="Jeremy Robson's profile picture"
            priority
            fill
          />
        </div>
        <div>
          <span className="font-normal text-15 text-c-pale-blue">
            Report for
          </span>
          <h1 className="font-light text-white text-24 lg:text-40">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <ul className="flex items-center py-6 lg:px-8 lg:pt-[26px] lg:pb-8 lg:flex-col lg:gap-[21px]">
        <Tab
          className={isActive('daily')}
          name="Daily"
          onFilter={() => onFilter('daily')}
        />
        <Tab
          className={isActive('weekly')}
          name="Weekly"
          onFilter={() => onFilter('weekly')}
        />
        <Tab
          className={isActive('monthly')}
          name="Monthly"
          onFilter={() => onFilter('monthly')}
        />
      </ul>
    </aside>
  );
}
