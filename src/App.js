import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ImageContainer from "./components/ImageContainer";
import ImageModal from "./components/ImageModal";
import SortPanel from "./components/SortPanel";

function App() {

  let page = 1

  const [images, setImages] = useState([])
  const [sortedImages, setSortedImages] = useState([])
  const [image, setImage] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [sorted, setSorted] = useState(false)
  
  const getData = async () => {
    let link = `https://api.unsplash.com/photos/?page=${page}&per_page=20&client_id=bD341Wws_gVnUIlx2akfdMJXzxq9cIg4oDv_mY7k2CE`
    const res = await fetch(link)
    const data = await res.json()
    
    setImages((oldData) => [...oldData, ...data]);
    page++
  }

  useEffect(() => {
    const firstLoad = async () => {
      let link = `https://api.unsplash.com/photos/?page=1&per_page=20&client_id=bD341Wws_gVnUIlx2akfdMJXzxq9cIg4oDv_mY7k2CE`
      const res = await fetch(link)
      const data = await res.json()
      setImages(data)
      page++
    }
    
    firstLoad()
  }, [])

  return (
    <div className="container">

      <AnimatePresence initial={false} mode="wait">
        {showModal && (
          <ImageModal
            showModal={showModal}
            setShowModal={setShowModal}
            image={image}
          />
        )}
      </AnimatePresence>

      <SortPanel images={images} setImages={setImages} setSorted={setSorted} setSortedImages={setSortedImages}/>

      <ImageContainer
        images={sorted ? sortedImages : images}
        getData={getData}
        setShowModal={setShowModal}
        setImage={setImage}
        sorted={sorted}
      />
    </div>
  );
}

export default App;
