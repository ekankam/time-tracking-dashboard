import Image from 'next/image';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { images, colors } from '@/utils';

type TimeFrameCardProps = {
  index: number;
  task: any;
  timeframe: string;
};

export default function TimeFrameCard({
  index,
  task,
  timeframe
}: TimeFrameCardProps) {
  return (
    <article className="rounded-c-radius overflow-hidden cursor-pointer relative h-[160px] lg:h-full shadow-c-shadow">
      <div
        className="flex justify-end w-full"
        style={{ backgroundColor: colors[index].color }}
      >
        <div className="relative w-[74px] h-[70px]">
          <Image src={images[index].svg} alt={images[index].alt} fill />
        </div>
      </div>
      <div className="px-6 py-7 rounded-c-radius bg-c-dark-blue-500 lg:py-[29px] lg:px-[30px] hover:bg-c-dark-blue-400 absolute left-0 right-0 top-12 bottom-0">
        <div className="flex items-center justify-between lg:mb-6">
          <h2 className="font-medium text-white text-18">{task.title}</h2>
          <EllipsisHorizontalIcon className="w-5 cursor-pointer lg:w-7 text-c-pale-blue hover:text-white" />
        </div>
        <div className="flex items-center justify-between mt-[6px] lg:flex-col lg:items-start">
          <h3 className="font-light text-white text-32 lg:text-56">
            {task.timeframes[timeframe].current}hrs
          </h3>
          <p className="font-normal text-15 text-c-pale-blue">
            Last Week - {task.timeframes[timeframe].previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}
