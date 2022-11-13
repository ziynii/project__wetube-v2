interface IThumbnails {
  url: string;
  width: number;
  height: number;
}

export interface IVideoBase {
  snippet: {
    channelTitle: string;
    description: string;
    title: string;
    publishedAt: string;
    channelId: string;
    thumbnails: {
      medium: IThumbnails;
      default: IThumbnails;
    };
    tags: string[];
  };
}

export interface IVideo extends IVideoBase {
  id: string;
}

export interface IBeforeMapVideo extends IVideoBase {
  id: {
    kind: string;
    videoId: string;
  };
}
