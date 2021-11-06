import axios from 'axios'
import CountryCard from '../../components/CountryCard'

export const getStaticProps = async context => {
  const { countryName } = context.params
  const { data: [country] } = await axios.get(`https://restcountries.com/v2/name/${countryName}`)

  return {
    props: {
      country
    }
  }
}

export const getStaticPaths = async () => {
  const { data: countries } = await axios.get('https://restcountries.com/v2/all')

  // const pathsWithParams = countries.map(({name}) => ({ params: { countryName: name.toLowerCase() }}))

  const test = [
    { params: { countryName: 'germany'} },
    { params: { countryName: 'russia'} },
    { params: { countryName: 'afghanistan'} },
    { params: { countryName: 'france'} },
  ]

  return {
    paths: test,
    fallback: false
  }
}

const CountryCardPage = ({country}) => (
  <CountryCard country={country} />
)

export default CountryCardPage