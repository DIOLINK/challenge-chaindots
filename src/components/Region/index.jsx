import { useCountries } from '@/contexts/CountriesContext';
import Select from 'react-select';
import './filter.css';

export const SelectRegion = () => {
  const { listRegions, setRegionToFilter } = useCountries();

  return (
    <Select
      options={listRegions}
      classNamePrefix='customSelect'
      components={{
        IndicatorSeparator: () => null,
      }}
      onChange={({ value }) => setRegionToFilter(value)}
      placeholder='Filter by Region'
    />
  );
};
