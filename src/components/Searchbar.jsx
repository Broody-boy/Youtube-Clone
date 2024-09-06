import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setSearching] = useState(false);
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 2,
        // border: '1px solid #e3e3e3',
        padding: 1,
        backgroundColor: isSearching ? '#efefef' : '#f2f2f2',
        boxShadow: 'none',
        mr: { sm: 5}
      }}
    >
      <IconButton type='submit' sx = {{ mr: '5px', color: '#444746'}}>
        <SearchIcon/>
      </IconButton>

      <input
        className='search-bar'
        placeholder='Search for videos...'
        value={searchText}
        style={{background: 'none', fontSize: '16px'}}
        onChange={(e) => {
          setSearchText(e.target.value)
          setSearching(e.target.value !== '')
        }}
      />

      {isSearching && <IconButton sx = {{ mr: '5px', color: '#444746'}} onClick={(e) => {setSearching(false); setSearchText('')}}>
        <CloseIcon/>
      </IconButton>}

      
    </Paper>
  )
}

export default Searchbar