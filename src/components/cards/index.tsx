import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActions,
  CardMedia,
  CircularProgress,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { getCelciusFromKelvin } from '../../helpers/temperature';
import { Link } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import {
  ISysField,
  IMainField,
  IWeatherField,
} from '../../interfaces/IWeather';

interface IMultiActionAreaCard {
  name: string;
  sys: ISysField;
  weather: Array<IWeatherField>;
  main: IMainField;
  updateOrAddWeather: (name: string) => void;
  deleteWeather: (name: string) => void;
}

export default function MultiActionAreaCard({
  name,
  sys,
  weather,
  main,
  updateOrAddWeather,
  deleteWeather,
}: IMultiActionAreaCard) {
  const { state } = useWeather();
  if (!name) return null;

  return (
    <div data-test='card-component'>
      <Card
        sx={{
          minWidth: 275,
          marginTop: '30px',
          marginRight: '10px',
          '&:last-child': { marginRight: '0px' },
        }}
      >
        <CardContent>
          {state.isLoadingCard === name ? (
            <CircularProgress />
          ) : (
            <>
              <Typography
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                gutterBottom
                variant='h5'
                component='div'
                data-test='name-country-typography'
              >
                {name}, {sys.country}
                <IconButton onClick={() => updateOrAddWeather(name)}>
                  <AutorenewIcon />
                </IconButton>
              </Typography>
              <Typography
                variant='h6'
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {getCelciusFromKelvin(main.temp)}&#8451;
                <CardMedia
                  sx={{ width: 60 }}
                  component='img'
                  image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                ></CardMedia>
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                {weather[0].main}
              </Typography>
              <Typography variant='inherit'>
                Feels like {getCelciusFromKelvin(main.feels_like)}&#8451;,{' '}
                {weather[0].description}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/details?city=${name}`} style={{ textDecoration: 'none' }}>
            <Button size='small' color='primary'>
              Read more
            </Button>
          </Link>
          <IconButton onClick={() => deleteWeather(name)}>
            <DeleteIcon sx={{ cursor: 'pointer', color: 'red' }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
