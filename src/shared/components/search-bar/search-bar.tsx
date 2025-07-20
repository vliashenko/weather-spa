import './styles.scss';

export default function SearchBar({
  search,
  setSearch
}: {
  search: string;
  setSearch: (city: string) => void;
}) {
  return (
    <input className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} />
  );
}
