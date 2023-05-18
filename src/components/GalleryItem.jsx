import { useState } from "react"

export default function GalleryItem({item}){
    
    let [view, setView] = useState(false)
    let {
        trackName,
        colletctionName,
        primaryGenreName,
        releaseDate,
        artworkUrl100
    } = item

    const simpleStyle = {
        with: '25vw',
        height: '20vh',
        border: '1px solid black',
        margin: '2px'
    }
    const detailStyle = {
        with: '80vw',
        height: '20vh',
        border: '1px solid black',
        margin: '2px',
        backgroundImage: `url(${artworkUrl100})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'black'
    }
    
    const simpleView = () => {
        return <div style={simpleStyle}>
            <h3>{trackName}</h3>
            <h4>{colletctionName}</h4>

        </div>
    }
    const detailView = () => {
        return <div style={detailStyle}>
            <h3>{trackName}</h3>
            <h4>{colletctionName}</h4>
            <h4>{primaryGenreName}</h4>
            <h4>{releaseDate}</h4>

        </div>
    }

    return <div
            onClick={ () => setView(!view)}
            style={{display: 'inline-block', background: 'white', cursor: 'pointer'}}
            >
        {
            view ? detailView() : simpleView()
        }
    </div>
}