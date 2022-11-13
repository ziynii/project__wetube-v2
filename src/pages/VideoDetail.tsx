import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatAgo } from '../util/date';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, publishedAt, tags, description } = video.snippet;

  return (
    <section className="overflow-hidden flex flex-col lg:flex-row  p-5">
      <div className="basis-4/6 mr-2">
        <div className="relative w-full pb-56 z-10 mt-14 md:mt-24">
          <iframe
            className="absolute w-full h-full"
            id="player"
            datatype="text/html"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
            allowFullScreen
          />
        </div>
        <p className="text-xs mt-2 text-blue-400">
          {tags && tags.slice(0, 3).map((tag: string) => `#${tag} `)}
        </p>
        <h4 className="font-bold mb-4">{title}</h4>

        <ChannelInfo video={video} />

        <div className="p-4 mb-4 rounded-md bg-gray-200">
          <p>{formatAgo(publishedAt, 'ko')}</p>
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </div>

      <RelatedVideos id={video.id} />
    </section>
  );
}
