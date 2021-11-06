import { useState } from 'react'
import axios from 'axios'
import CountryCard from '../components/CountryCard'
import Filters from '../components/Filters'

export const getStaticProps = async () => {
  const { data: countries } = await axios.get('https://restcountries.com/v2/all')

  return {
    props: {
      countries
    }
  }
}

const CountryCards = ({countries}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('none')

  if (countries.length === 0) return <p>Loading...</p>

  const filteredCountries = countries.filter(({ name, region }) => {
    const filterByRegion = selectedRegion !== 'none' 
      ? region.includes(selectedRegion)
      : true

    const filterByName = searchTerm.length !== 0
      ? name.toLowerCase().includes(searchTerm.toLowerCase())
      : true

    return filterByName && filterByRegion
  })

  return (
    <div>
      <Filters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      {filteredCountries.length === 0 ? <p>No Country Found</p> : (
        <ul className="flex flex-row flex-wrap">
          {filteredCountries.map(country => (
            <CountryCard key={country.numericCode} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCards