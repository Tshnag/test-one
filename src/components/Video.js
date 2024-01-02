import './Video.css';

function Video({ title, channel, views, time, verified, children}) {
    console.log('Render Video')
    
    return (
        <div className="container">
            
            <div className='img'>
                <img src="https://149695645.v2.pressablecdn.com/wp-content/uploads/2021/06/vide%CC%81o-1.png" alt="Tushar-Channel"></img>
            </div>
            <div className="title">{title}</div>
            {/* {verified ? <div className="channel">{channel} <span>✅</span></div>
             : <div className="channel">{channel} </div> } */}
            <div className="channel">{channel} {verified ? <span>✅</span> : null} </div> 
            <div className="views">{views} views<span>.</span> {time} </div>
            <div>
                {children}
            </div>
        </div>
    );

}


export default Video;