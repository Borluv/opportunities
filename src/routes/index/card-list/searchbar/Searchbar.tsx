import type { FC } from 'react';

interface SearchBarPropTypes {
  search: string;
  handleSearch: () => void;
}

const Searchbar: FC<SearchBarPropTypes> = ({ search, handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Address..." value={search} onChange={handleSearch} />
    </div>
  );
};

export default Searchbar;
