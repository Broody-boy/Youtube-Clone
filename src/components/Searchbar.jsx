import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searchbar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 2,
        // border: '1px solid #e3e3e3',
        padding: 1,
        backgroundColor: '#f2f2f2',
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
        value=""
        style={{background: 'none', fontSize: '16px'}}
        onChange={() => {}}
      />
      
    </Paper>
  )
}

export default Searchbar