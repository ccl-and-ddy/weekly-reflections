

const FilterNav = () => {
  return (
    <form action="">
      <h4>filter</h4>
      <ul>
        <li>
          <input type="text" name="dateFrom" id="dateFrom" />
          <label htmlFor="dateFrom">date from:</label>
        </li>
        <li>
          <input type="text" name="dateTo" id="dateTo" />
          <label htmlFor="dateTo">date to:</label>
        </li>
        <li>
          <input type="text" name="promptType" id="promptType" />
          <label htmlFor="promptType">prompt type</label>
        </li>
      </ul>
      <button type="submit">apply filters</button>
    </form>
  )
}

export default FilterNav;