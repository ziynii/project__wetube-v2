import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Youtube from '../api/youtube';
import { IVideo } from '../interface';

interface IChannelInfoProps {
  video: IVideo;
}

export default function ChannelInfo({ video }: IChannelInfoProps) {
  const youtube = new Youtube();
  const { channelId, channelTitle } = video.snippet;
  const { data: channelImage } = useQuery(['channel', channelId], () =>
    youtube.channelImage(channelId)
  );
  return (
    <div className="flex items-center mb-4">
      <img
        className="w-12 mr-2 rounded-full"
			src={channelImage}
        alt={channelTitle}
      />
      <p className="dark:text-white">{channelTitle}</p>
    </div>
  );
}
