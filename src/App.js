import { useState } from "react";
import videoDb from "./datas/data.js";
import AddVideo from "./components/AddVideo.js";
import VideoList from "./components/VideoList.js";
import "./App.css";



function App() {
  console.log('Render App')
  const [videos, setVideos] = useState(videoDb)

  function addVideo(video){
    setVideos([...videos,
      {...video, id: videos.length+1}
    ])
  }

  return (
    <div className='App' >  {/* bubbling effect---> onClick={() => console.log("App")} */}
     <AddVideo addVideo={addVideo}></AddVideo>
     <VideoList videos={videos}></VideoList>
     {/* <div>
        <button onClick={(e) => {
          e.stopPropagation();

          // console.log('inside Add-video button')
          // setVideos([...videos,{
          //   id: videos.length+1,
          //   title: "Aquarium Visit.",
          //   channel: "Coding",
          //   views: "1M",
          //   time: "2 month ago",
          //   verified: true,
          // }]);

        }}> Add Video</button>
      </div> */}

      {/* <PlayButton  message='paused-song' onClick={()=> alert("Paused")}>Pause</PlayButton> */}

    </div>
  );
}
//onPlay and onPause are custom events created by us..,
//Then we are putting multiple events on one button,


export default App;

