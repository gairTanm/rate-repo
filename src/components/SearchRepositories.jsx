import { useQuery } from '@apollo/client';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import useSearch from '../hooks/useSearch';

const SearchRepositories = ({ searchQuery, onChangeQuery }) => {
  return (
    <Searchbar
      placeholder="Search Repositories"
      onChangeText={onChangeQuery}
      value={searchQuery}
    />
  );
};

export default SearchRepositories;
