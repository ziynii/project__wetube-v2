import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/mockYoutube';
import VideoCard from '../components/VideoCard';
import { IVideo } from '../interface';

export default function Videos() {
  const youtube = new FakeYoutube();

  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () =>
    youtube.search(keyword).then((res) => res.data.items)
  );

  return (
    <section className="overflow-hidden">
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
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
