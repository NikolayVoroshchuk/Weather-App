import { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';
import { Logo } from '../../assets/weather';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [newCity, setNewCity] = useState('');
  const { updateOrAddWeather } = useWeather();

  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewCity(e.target.value);

  const searchCity = () => {
    if (newCity.trim().length) {
      updateOrAddWeather(newCity);
    }
  };

  return (
    <div data-test='header-component'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Link to={'/'}>
              <SvgIcon style={{ fontSize: '3rem', cursor: 'pointer' }}>
                <Logo />
              </SvgIcon>
            </Link>
            <Typography
              variant='h5'
              noWrap
              component='div'
              data-test="weather-typography"
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Weather App
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search city...'
                value={newCity}
                onChange={handleCity}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Button
              variant='contained'
              sx={{ marginLeft: '15px' }}
              onClick={searchCity}
            >
              Add new city
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
