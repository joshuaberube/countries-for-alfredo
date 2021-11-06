import Link from 'next/link'
import Image from 'next/image'

const CountryCard = ({country: { name, population, flags, region, capitol }}) => {
  return (
    <li className="flex flex-row flex-wrap m-80">
      <Link href={`/countries/${name.toLowerCase()}`}>
        <a className="w-262 h-336 border-2 shadow rounded-sm">
          <Image
            src={flags.png}
            alt={name}
            className="w-262 h-160 border-b-2 rounded-sm object-fill"
            width={262}
            height={160}
          />
          <div className="w-262 h-174 flex flex-col justify-center align-items-center   ">
            <h2 className="text-16">{name}</h2>
            <p className="text-14">Population: {population}</p>
            <p className="text-14">Region: {region}</p>
            <p className="text-14">Capitol: {capitol}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default CountryCard