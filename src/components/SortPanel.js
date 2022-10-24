import React, { useEffect, useState } from 'react'

const SortPanel = ({ images, setImages, setSorted, setSortedImages }) => {

  const [sort, setSort] = useState(0)

  const handleSort = (e) => {
    setSort(Number(e.target.value));
  }

  useEffect(() => {
      let sortedImages = [];

      if (sort === 0) {
        sortedImages = [...images].sort((a, b) => {
          return a.likes - b.likes;
        });
        setSorted(false)
        setImages(images);
      }

      if (sort === 1) {
        sortedImages = [...images].sort((a, b) => {
          return a.likes - b.likes;
        });
      }
  
      if (sort === 2) {
        sortedImages = [...images].sort((a, b) => {
          return b.likes - a.likes;
        });
      }

      if (sort === 3) {
        sortedImages = [...images].sort((a, b) => {
          return a.width - b.width;
        });
      }

      if (sort === 4) {
        sortedImages = [...images].sort((a, b) => {
          return b.width - a.width;
        });
      }

      if (sort === 5) {
        sortedImages = [...images].sort((a, b) => {
          return a.height - b.height;
        });
      }

      if (sort === 6) {
        sortedImages = [...images].sort((a, b) => {
          return b.height - a.height;
        });
      }

      if (sort !== 0) {
        setSorted(true)
        setSortedImages(sortedImages)
      }
  }, [sort])

  return (
    <div className="sort-panel">

      <h1 onClick={() => window.location.reload(false)}>Photo Gallery</h1>

      <select onChange={handleSort}>
        <option value="0">Sort By:</option>
        <option value="1">Likes: Lowest to Highest</option>
        <option value="2">Likes: Highest to Lowest</option>
        <option value="3">Width: Lowest to Highest</option>
        <option value="4">Width: Highest to Lowest</option>
        <option value="5">Height: Lowest to Highest</option>
        <option value="6">Height: Highest to Lowest</option>
      </select>

    </div>
  );
}

export default SortPanel