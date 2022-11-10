import React from 'react';
import { useQuery } from '@tanstack/react-query';
import FakeYoutube from '../api/mockYoutube';
import { IVideo } from '../interface';
import { formatAgo } from '../util/date';

interface IVideoCardProps {
  video: IVideo;
}

export default function VideoCard({ video }: IVideoCardProps) {
  const { thumbnails, title, channelTitle, channelId, publishedAt } =
    video.snippet;
  const youtube = new FakeYoutube();
  const { data: channelImage } = useQuery(['channel', channelId], () =>
    youtube
      .channels()
      .then((res) => res.data.items[0].snippet.thumbnails.default.url)
  );

  return (
    <li className="cursor-pointer">
      <img
        className="w-full rounded shadow-lg shadow-gray-300 lg:hover:scale-125"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex mt-3">
        <img
          className="rounded-full w-10 h-10 border border-slate-900 mr-3"
          src={channelImage}
          alt={channelTitle}
        />
        <div>
          <h5 className="font-bold overflow-hidden line-clamp-2">{title}</h5>
          <p className="text-xs mt-1 text-gray-600">
            {channelTitle} &middot; {formatAgo(publishedAt, 'ko')}
          </p>
        </div>
      </div>
    </li>
  );
}
