import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IVideo } from '../interface';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';
import Youtube from '../api/youtube';

interface IVideoCardProps {
  video: IVideo;
  type: string;
}

export default function VideoCard({ video, type }: IVideoCardProps) {
  const { thumbnails, title, channelTitle, channelId, publishedAt } =
    video.snippet;
  const youtube = new Youtube();
  const { data: channelImage } = useQuery(['channel', channelId], () =>
    youtube.channelImage(channelId)
  );
  const navigate = useNavigate();
  const isRelated = type === 'related';

  return (
    <li
      className={'cursor-pointer ' + (isRelated ? 'flex gap-1 mb-2' : '')}
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img
        className={
          'rounded shadow-lg shadow-gray-300 dark:shadow-black ' +
          (isRelated
            ? 'w-60 mr-2'
            : 'w-full lg:hover:scale-105 ease-out duration-150')
        }
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex mt-3">
        <img
          className={isRelated ? 'hidden' : 'rounded-full w-10 h-10 mr-3'}
          src={channelImage}
          alt={channelTitle}
        />
        <div>
          <h6 className="overflow-hidden line-clamp-2 lg:text-sm dark:text-white">
            {title}
          </h6>
          <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
            {channelTitle} &middot; {formatAgo(publishedAt, 'ko')}
          </p>
        </div>
      </div>
    </li>
  );
}
