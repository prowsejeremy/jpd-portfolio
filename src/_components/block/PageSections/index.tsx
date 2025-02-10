// Components
import TextBlock from "@/src/_components/block/TextBlock";
import ImageBlock, { ImageType } from "@/src/_components/block/ImageBlock";
import VideoBlock from "@/src/_components/block/VideoBlock";

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
