import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Youtube from '../api/youtube';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';
import { IVideo } from '../interface';

export default function Videos() {
  const youtube = new Youtube();

  const { keyword } = useParams();

  const { isLoading, data: videos } = useQuery(
    ['videos', keyword],
    () => youtube.videos(keyword),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <section className="overflow-hidden dark:bg-slate-800 dark:text-white">
      {isLoading && <Loading />}
      {videos && (
        <ul className="p-5 lg:px-16 mt-14 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-16">
          {videos.map((video: IVideo) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </section>
  );
}
