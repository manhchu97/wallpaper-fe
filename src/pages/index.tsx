import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const WallpaperGallery = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchWallpapers = async (pageNum) => {
    try {
      const response = await axios.get(`http://103.162.21.218:9999/wallpaper?page=${pageNum}&limit=10`);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching wallpapers:', error);
      return [];
    }
  };

  const loadMoreWallpapers = async () => {
    const newWallpapers = await fetchWallpapers(page);
    setWallpapers((prev) => [...prev, ...newWallpapers]);
    
    // Kiểm tra xem còn dữ liệu nữa không
    if (newWallpapers.length === 0) {
      setHasMore(false);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    loadMoreWallpapers();
  }, []);

  return (
    <InfiniteScroll
      dataLength={wallpapers.length}
      next={loadMoreWallpapers}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="gallery">
        {wallpapers.map((wallpaper) => (
          <div key={wallpaper.id} className="wallpaper">
            <img src={`http://103.162.21.218:9999${wallpaper.image.filePath}`} alt={wallpaper.id} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default WallpaperGallery;