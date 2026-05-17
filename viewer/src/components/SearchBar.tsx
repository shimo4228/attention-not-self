interface SearchBarProps {
  value: string;
  onChange(v: string): void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      className="search"
      placeholder="検索 / Search (manaskāra, 阿賴耶識, GWT…)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
