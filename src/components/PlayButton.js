import {useState} from "react";
import "./PlayButton.css"

function PlayButton({ children, onPlay, onPause }) {
    console.log('Render Button')

    let [playingStatus, setPlayingStatus] = useState(false);  //in future dont use this approach + //note that when using useSatate a copy of variable is created for every individual button 'involved'..

    //we need button as comp because it will have its own special usage with different functions

    function handleCLick(e) { //common naming convention, ie handle(state it is a handler func) and name(name of what to handle)
        //console.log(e)
        e.stopPropagation() //used to stop propagation of event from children to its parents
        
        if (playingStatus) onPause();
        else onPlay();

        setPlayingStatus(!playingStatus) // USESTATE= whenever we want to modify our variable we do it with help of its setter varibale as shown here
    }

    return ( //here in onClick{} we just have to write the name of the function, do not have to call like name() or in short define it, just write name
        <div>
            <button className="button-18" onClick={handleCLick}>{children} {playingStatus ? '⏸️':'▶️'}</button>
        </div>
    )
}

export default PlayButton;