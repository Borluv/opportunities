import type { FC } from 'react';

interface SearchBarPropTypes {
  search: string;
  handleSearch: () => void;
}

const Searchbar: FC<SearchBarPropTypes> = ({ search, handleSearch }) => (
  <div>
    <input type="text" placeholder="Address..." value={search} onChange={handleSearch} />
  </div>
);

export default Searchbar;
