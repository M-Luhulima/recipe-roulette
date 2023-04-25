import * as React from "react";
import { Recipe } from "../utils/spoonApi";
import "../index.css";

const Results = () => {
  const [randomRecipe] = React.useState<Recipe>();

  return <div>
     results: {randomRecipe ? randomRecipe.title : 'not found'}
  </div>;
};

export default Results;




// type videoBlockProps = {
//   id: string;
// };

// const VideoElement = (props: videoBlockProps): React.ReactElement<{}> => {
//   return (
//     <div className="mx-5">
//       <iframe
//         title={`YouTube video player ${props.id}`}
//         width="450"
//         height="280"
//         src={`https://www.youtube.com/embed/${props.id}`}
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// const HelpMe = (): React.ReactElement<{}> => {
//   const [videoData, setVideoData] = React.useState<any[]>([]);

//   React.useEffect(() => {
//     getVideos()
//       .then(data => {
//         setVideoData(transformData(data as any[]));
//       })
//       .catch(() => {
//         setVideoData([]);
//       });
//   }, []);

//   const transformData = (data: any[]) => {
//     return data.map((item: any) => {
//       return item.contentDetails.videoId;
//     });
//   };

//   return (
//     <div className="video-cont">
//       {videoData.map((videoId: string, idx: number) => (
//         <VideoElement key={idx} id={videoId}/>
//       ))}
//     </div>
//   );
// };

// export default HelpMe;
