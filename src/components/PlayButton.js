import "./PlayButton.css"

function PlayButton({ children, onPlay, onPause }) {
    let playingStatus = false;  //in future dont use this approach

    //we need button as comp because it will have its own special usage with different functions

    function handleCLick(e) { //common naming convention, ie handle(state it is a handler func) and name(name of what to handle)
        console.log(e)
        e.stopPropagation() //used to stop propagation of event from children to its parents
        
        if (playingStatus) onPlay();
        else onPause();

        playingStatus = !playingStatus;
    }

    return ( //here in onClick{} we just have to write the name of the function, do not have to call like name() or in short define it, just write name
        <div>
            <button className="button-18" onClick={handleCLick}>{children} {playingStatus ? <span>||</span>: <span>D</span>}</button>
        </div>
    )
}

export default PlayButton;