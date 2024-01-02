import "./AddVideo.css"
import { useState } from "react";

function AddVideo({ addVideo }) {

    const initialState = {
        channel: "Coding",
        time: "1s ago",
        verified: true,
        title: '',
        views: '',
    }

    const [video, setVideos] = useState(initialState)

    function handleSumbit(e) {
        e.preventDefault()
        console.log(video)
        addVideo(video)
        setVideos(initialState)
    }

    function handleChange(e) {
        setVideos({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    //below value is added to make the form controlled
    return (
        <>
            <div>Add Your video below</div>
            <form>
                <input onChange={handleChange} value={video.title} name="title" type="text" placeholder="title"></input>
                <input onChange={handleChange} value={video.views} name="views" type="text" placeholder="views"></input>
                <button onClick={handleSumbit}>Add</button>
            </form>
        </>
    )
}

export default AddVideo;