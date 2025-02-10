// Components
import TextBlock from "src/_components/blocks/TextBlock";
import ImageBlock, { ImageType } from "src/_components/blocks/ImageBlock";
import VideoBlock from "src/_components/blocks/VideoBlock";

type sectionTypes = {
  type: string;
  content: string;
  image: ImageType;
  videoUrl: string;
};

const PageSections = ({ sections }: { sections: sectionTypes[] }) => {
  const fetchSection = (section: sectionTypes) => {
    switch (section.type) {
      case "text":
        return <TextBlock content={section.content} />;
      case "image":
        return <ImageBlock image={section.image} />;
      case "video":
        return <VideoBlock src={section.videoUrl} />;
    }
  };

  return (
    <div>
      {sections.map((section, key) => {
        return <section key={key}>{fetchSection(section)}</section>;
      })}
    </div>
  );
};

export default PageSections;
