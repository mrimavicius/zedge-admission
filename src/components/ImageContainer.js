import { useEffect } from 'react'
import SingleImage from './SingleImage'

const ImageContainer = ({ images, getData, setShowModal, setImage, sorted }) => {

    const handleScroll = (e) => {

        if (window.innerHeight + e.target.documentElement.scrollTop + 50 >= e.target.documentElement.scrollHeight){
            return getData()
        }
    }

    useEffect(() => {
        if(sorted) return

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [sorted]);

  return (
    <div className='wrapper'>
        {images && images.map((item, index) => (
            <SingleImage key={index} item={item} index={index} setShowModal={setShowModal} setImage={setImage} />
        ))}
    </div>
  )
}

export default ImageContainer