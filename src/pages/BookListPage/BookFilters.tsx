import { LEVEL_FILTER_OPTIONS, PRICE_FILTER_OPTIONS } from "api/booksApi";
import Search from "components/ui/Search/Search";
import Select, { Option } from "components/ui/Select/Select";

const PRICE_OPTIONS: Option[] = [
  { key: PRICE_FILTER_OPTIONS.ANY, value: "Any Price" },
  { key: PRICE_FILTER_OPTIONS.LESS15, value: "Up to $15" },
  { key: PRICE_FILTER_OPTIONS.BTW15AND30, value: "$15 - $30" },
  { key: PRICE_FILTER_OPTIONS.GREATER30, value: "$30+" },
];

const LEVEL_OPTIONS: Option[] = [
  { key: LEVEL_FILTER_OPTIONS.ANY, value: "Any Level" },
  { key: LEVEL_FILTER_OPTIONS.BEGINNER, value: "Beginner" },
  { key: LEVEL_FILTER_OPTIONS.MIDDLE, value: "Middle" },
  { key: LEVEL_FILTER_OPTIONS.PRO, value: "Pro" },
];

export interface FiltersParams {
  searchText: string;
  priceFilter: PRICE_FILTER_OPTIONS;
  levelFilter: LEVEL_FILTER_OPTIONS;
}

interface Props {
  params: FiltersParams;
  onChange: (params: FiltersParams) => void;
}

const BookFilters = ({ params, onChange }: Props) => {
  const { searchText, priceFilter, levelFilter } = params;

  const setFilterValue = (filter: keyof typeof params) => (value: string) => {
    onChange({ ...params, [filter]: value });
  };

  return (
    <div className="mt-2 flex flex-col justify-center items-center gap-6 top-20 w-full mb-6">
      <div className="md:hidden flex justify-center w-full max-w-lg">
        <Search value={searchText} onChange={setFilterValue("searchText")} />
      </div>
      <div className="flex justify-center items-center w-full gap-6">
        <Select
          selectedKey={priceFilter}
          options={PRICE_OPTIONS}
          onSelect={setFilterValue("priceFilter")}
        />
        <div className="hidden md:flex w-full max-w-lg">
          <Search value={searchText} onChange={setFilterValue("searchText")} />
        </div>

        <Select
          selectedKey={levelFilter}
          options={LEVEL_OPTIONS}
          onSelect={setFilterValue("levelFilter")}
        />
      </div>
    </div>
  );
};

export default BookFilters;
