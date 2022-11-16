import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatAgo } from '../util/date';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import { decodeTitle } from '../util/decode';
import { registTitle } from '../util/helmet';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, publishedAt, tags, description } = video.snippet;
  const formatTitle = decodeTitle(title);

  return (
    <section className="overflow-hidden dark:bg-slate-800 flex flex-col lg:flex-row  p-5">
      {registTitle(formatTitle)}
      <div className="basis-4/6 lg:mr-2">
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
        <h4 className="font-bold mb-4 dark:text-white">{formatTitle}</h4>

        <ChannelInfo video={video} />

        <div className="p-4 mb-4 rounded-md bg-gray-200 dark:bg-gray-600">
          <p className="dark:text-gray-300">{formatAgo(publishedAt, 'ko')}</p>
          <pre className="whitespace-pre-wrap dark:text-gray-300">
            {description}
          </pre>
        </div>
      </div>

      <RelatedVideos id={video.id} />
    </section>
  );
}
