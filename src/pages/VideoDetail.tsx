import React from 'react';
import { useQuery } from '@tanstack/react-query';
import FakeYoutube from '../api/mockYoutube';
import { useLocation } from 'react-router-dom';
import { formatAgo } from '../util/date';
import VideoCard from '../components/VideoCard';
import { IRelatedVideo, IVideo } from '../interface';

export default function VideoDetail() {
  const youtube = new FakeYoutube();
  const {
    state: { video },
  } = useLocation();
  const { data: channel } = useQuery(['channel'], () =>
    youtube
      .channels()
      .then((res) => res.data.items[0].snippet.thumbnails.default.url)
  );

  const { data: relatedVideos } = useQuery(['relate'], () =>
    youtube.related().then((res) => {
      console.log(res.data.items);
      return res.data.items.map((item: IRelatedVideo) => ({
        ...item,
        id: item.id.videoId,
      }));
    })
  );

  console.log(relatedVideos);

  return (
    <section className="overflow-hidden flex flex-col lg:flex-row  p-5">
      <div className='basis-4/6 mr-2'>
				<div className="relative w-full pb-56 z-10 mt-14 md:mt-24">
					<iframe
						className="absolute w-full h-full"
						id="player"
						datatype="text/html"
						src={`http://www.youtube.com/embed/${video.id}`}
						frameBorder="0"
						title={video.snippet.title}
						allowFullScreen
					/>
				</div>
				<p className="text-xs mt-2 text-blue-400">
					{video.snippet.tags.slice(0, 3).map((tag: string) => `#${tag} `)}
				</p>
				<h4 className="font-bold">{video.snippet.title}</h4>
				<div className="flex items-center">
					<img
						className="mr-2 rounded-full"
						src={channel}
						alt={video.snippet.channelTitle}
					/>
					<p>{video.snippet.channelTitle}</p>
				</div>
				<div className="p-4 rounded-md bg-gray-200">
					<p>{formatAgo(video.snippet.publishedAt, 'ko')}</p>
					<pre className="whitespace-pre-wrap">{video.snippet.description}</pre>
				</div>
			</div>

      <ul className='basis-2/6 lg:mt-24'>
        {relatedVideos.map((item: IVideo) => (
          <VideoCard type="related" video={item} key={video.id.videoId} />
        ))}
      </ul>
    </section>
  );
}
