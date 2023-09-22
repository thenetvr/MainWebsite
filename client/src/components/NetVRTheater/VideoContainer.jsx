import { Container } from "react-bootstrap";

export default function VideoContainer() {
  const videoURL =
    "https://www.youtube.com/embed/W1fXgOh3lpY?si=-TLPP-chvbkAvCCq";

  // https://www.youtube.com/watch?v=W1fXgOh3lpY&t=1s

  return (
    <Container>
      <div className="flex justify-center">
        {videoURL && (
          <div className="ratio ratio-16x9">
            <iframe
              src={videoURL}
              title="YouTube Video"
              height="540px"
              width="720px"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </Container>
  );
}
