import { Divider, Input } from 'antd';

// The state for the search was created in the App component, so we should destructure our porps:
function Search({searchInput, setSearchInput}) {

    // Let's create a function that updates state with the value from the search input:
    const handleSearchChange = (event) => {
        // Set the state as the search value:
        setSearchInput(event.target.value)
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      {/* Note that this input is also controlled so we set the value as its state */}
      <Input className='search-bar' value={searchInput} type="text" onChange={handleSearchChange} />
    </>
  )
}

export default Search