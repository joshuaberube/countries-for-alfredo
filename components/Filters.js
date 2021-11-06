const Filters = ({searchTerm, setSearchTerm, selectedRegion, setSelectedRegion}) => {
  const searchChangeHandler = e => setSearchTerm(e.target.value)
  const onChangeHandler = e => setSelectedRegion(e.target.value)

  return (
    <div>
      <input
        value={searchTerm}
        type="search"
        placeholder="search..."
        onChange={searchChangeHandler}
      />
      {/* Add a <label> to both the input and select */}
      <select value={selectedRegion} onChange={onChangeHandler}>
        <option value="none" disabled>Select a region</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filters