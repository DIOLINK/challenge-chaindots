import { useCountries } from '@/contexts/CountriesContext';
import { STR_TXT, selectedOption } from '@/helpers';
import Select from 'react-select';
import './filter.css';

export const SelectRegion = () => {
  const { listRegions, regionToFilter, setRegionToFilter } = useCountries();
  return (
    <Select
      options={listRegions}
      classNamePrefix={STR_TXT.classNamePrefix}
      components={{
        IndicatorSeparator: () => null,
      }}
      onChange={({ value }) => setRegionToFilter(value)}
      placeholder={STR_TXT.filterByRegion}
      value={selectedOption(listRegions, regionToFilter)}
    />
  );
};
