import "./App.css";
import PlayButton from "./components/PlayButton.js";
import Video from './components/Video';
import videoArr from "./datas/data.js";


function App() {
  return (
    <div className='App' onClick={()=>console.log("App")}>
      <div className="app-video-align" >

        {
          videoArr.map(video => <Video  //it takes each object from array(videoArr) in video element,
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
          >

            <PlayButton onPlay={() => console.log("Playing..",video.title)} onPause={() => console.log("Paused",video.title)} >{video.title}</PlayButton>

          </Video>)
        }
      </div>

      {/* <PlayButton  message='paused-song' onClick={()=> alert("Paused")}>Pause</PlayButton> */}

    </div>
  );
}
//onPlay and onPause are custom events created by us..,
//Then we are putting multiple events on one button,


export default App;

