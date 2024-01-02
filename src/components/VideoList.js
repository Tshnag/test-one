import Video from "./Video.js"
import PlayButton from "./PlayButton.js";

function VideoList({videos}){

    return(
        <div className="app-video-align" >

        { //this below 'videos' is from useState variable [videos, setVideos] 
          videos.map(video => <Video  //it takes each object from array(videoArr) in video element,
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
          >

            <PlayButton onPlay={() => console.log("Playing..", video.title)} onPause={() => console.log("Paused", video.title)} >{video.title}</PlayButton>

          </Video>)
        }
      </div>
    )
}


export default VideoList;