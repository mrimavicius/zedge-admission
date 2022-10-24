import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ImageModal = ({ showModal, setShowModal, image}) => {

  const ref = useRef()

  useEffect(() => {
    let clickOutside = (e) => {
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", clickOutside)

    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [showModal])

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal"
    >
      <motion.div
        ref={ref}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal-content"
      >
        <span
          onClick={() => setShowModal(false)}
          className="fa-solid fa-xmark close-btn"
        ></span>

        <div className="modal-top">
          <div className="modal-top-left">
            <img src={image.user.profile_image.small} alt="" />
            <p>{image.user.name}</p>
          </div>

          <div className="modal-top-right">
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>

        <div className="modal-bottom">
          
          <img src={image.urls.regular} alt="" />

          <div className="modal-bottom-down">
            <div className="image-info">
              <span>Height</span>
              <p>{image.height}px</p>
            </div>
            <div className="image-info">
              <span>Width</span>
              <p>{image.width}px</p>
            </div>
            <div className="image-info">
              <span>Likes</span>
              <p>{image.likes}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ImageModal