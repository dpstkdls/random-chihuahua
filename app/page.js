'use client';

import { useState, useEffect } from 'react';
import { fetchChihuahuaImage } from '../lib/dogApi';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');

  const handleNewChihuahua = async () => {
    const newUrl = await fetchChihuahuaImage();
    setImageUrl(newUrl);
  };

  useEffect(() => {
    // Load the first image when the component mounts
    handleNewChihuahua();
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <main>
      <h1>랜덤 치와와 생성기</h1>
      <p>버튼을 눌러 새로운 치와와를 만나보세요!</p>
      <div>
        {imageUrl ? <img src={imageUrl} alt="치와와 이미지" /> : <p>로딩 중...</p>}
      </div>
      <button onClick={handleNewChihuahua}>새 치와와!</button>
    </main>
  );
}
