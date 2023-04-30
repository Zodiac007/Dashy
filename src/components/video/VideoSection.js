import { YTEmbedUrlConverter } from "../../utlls/helpers";

export default function VideoSection({ video }) {
  const embedVideo = YTEmbedUrlConverter(video);

  return (
    <div className="video">
      <h2 className="text-themeBlack font-semibold">Video</h2>
      <div className="p-2 md:p-16">
        <div
          className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            title="youtube_product_video"
            className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            src={embedVideo}
            allowFullScreen=""
            data-gtm-yt-inspected-2340190_699="true"
            id="240632615"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com
