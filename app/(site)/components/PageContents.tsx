'use client';

import SongItem from '@/components/SongItem';
import { Song } from '@/types';
import React, { FC } from 'react';

interface PageContentsProps {
  songs: Song[];
}

const PageContents: FC<PageContentsProps> = props => {
  const { songs } = props;

  if (songs.length === 0) {
    return <div className='mt-4 text-neutral-400'>No songs available.</div>;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-col 2xl:grid-cols-8 gap-4 mt-4'>
      {songs.map((item, i) => (
        <SongItem key={item.id} onClick={() => {}} data={item} />
      ))}
    </div>
  );
};

export default PageContents;
