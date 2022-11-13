import axios, { AxiosInstance } from 'axios';
import { IBeforeMapVideo } from '../interface';

export default class Youtube {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async videos(keyword: string | undefined) {
    return keyword ? this.search(keyword) : this.mostPopular();
  }

  async channelImage(id: string) {
    return this.httpClient
      .get('channels', {
        params: { part: 'snippet', id },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id: string) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item: IBeforeMapVideo) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async search(keyword: string | undefined) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item: IBeforeMapVideo) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async mostPopular() {
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          maxResults: 20,
          regionCode: 'kr',
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
