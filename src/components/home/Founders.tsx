import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VideoCard } from './VideoCard';
interface CoFounerProps {
  name:string;
  title: string;
  videoSrc: string;
}
const CofounderVideoCard = ({ name, title, videoSrc }:CoFounerProps) => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <p className="text-sm text-gray-500">{title}</p>
    </CardHeader>
    <CardContent>
      <div className="aspect-video">
        <img
          src="/api/placeholder/640/360"
          alt={`${name} explaining the product`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </CardContent>
  </Card>
);

const CofounderVideos = () => {
  const cofounders = [
    { name: "Alh Rabiu Abubakar Tumfafi", title: "CEO", videoSrc: "./assets/video/223.mp4" },
    
  ];

  return (
    <div className="lg:p-12 py-6 px-1  bg-white w-[100%] lg:h-auto h-[460px]">
      <h2 className="lg:text-5xl text-3xl font-bold w-[100%] mt-10 text-center ml-auto mr-auto mb-4">From our CEO</h2>
      <div className="flex flex-col p-3 lg:w-[80%] w-[95%] lg:mt-12 mt-3 ml-auto mr-auto gap-4 justify-center items-center">
        {cofounders.map((cofounder, index) => (
          <VideoCard key={index} name={cofounder.name} videoUrl={cofounder?.videoSrc} />
        ))}
      </div>
    </div>
  );
};

export default CofounderVideos;