'use client';

import React, { FC, useEffect, useState } from 'react';
import qs from 'query-string';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import Input from './Input';

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = () => {
  const [value, setValue] = useState<string>('');
  const router = useRouter();
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({ url: '/search', query });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder='What do you want to listen to ?'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
