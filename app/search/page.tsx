import getSongsNyTitle from '@/actions/getSongsByTile';
import Header from '@/components/Header';
import SearchInput from '@/components/SearchInput';
import React, { FC } from 'react';
import SearchContentProps from './components/SearchContent';

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search: FC<SearchProps> = async ({ searchParams }) => {
  const songs = await getSongsNyTitle(searchParams.title);
  return (
    <div
      className='
    bg-neutral-900 
    rounded-lg 
    h-full 
    w-full 
    overflow-hidden 
    overflow-y-auto
  '
    >
      <Header className='from-bg-neutral-900'>
        <div className='mb-2 flex flex-col gap-y-6'>
          <h1 className='text-white text-3xl font-semibold'>Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContentProps songs={songs}/>
    </div>
  );
};

export default Search;
