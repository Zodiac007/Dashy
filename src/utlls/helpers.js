export function YTEmbedUrlConverter(url) {
  const videoID = url?.split("?v=")[1];

  const embedlink = `http://www.youtube.com/embed/${videoID}`;
  return embedlink;
}
