import GalleryItem from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

export default function Gallery() {
    const data = useContext(DataContext)

    const galleryItem = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {galleryItem}
        </div>
    )
}
