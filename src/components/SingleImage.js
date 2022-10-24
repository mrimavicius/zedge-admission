import React from 'react'

const SingleImage = ({ index, item, setShowModal, setImage }) => {

  const getClass = () => {
    if (item.height > item.width * 1.4) return "vertical"
    if (item.width > item.height * 1.4) return "horizontal"
    return ""
  }

  const openImage = () => {
    setImage(item)
    setShowModal(true)
  }

  return (
    <div onClick={openImage} className={getClass()} key={index}>
        <img src={item.urls.regular} alt="" />
    </div>
  )
}

export default SingleImage