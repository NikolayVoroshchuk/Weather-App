import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useHourlyWeather } from '../../hooks/useHourlyWeather';
import MainLayout from '../../layout/mainLayout';
import { getCelciusFromKelvin } from '../../helpers/temperature';
import { IWeatherList } from '../../interfaces/IWeather';

const DetailsPage = () => {
  const {
    weather: { cod, list, city },
  } = useHourlyWeather();

  return (
    <MainLayout data-test="details-page-component">
      {cod !== '200' ? (
        <CircularProgress
          sx={{ position: 'absolute', left: '50%', top: '50%' }}
        />
      ) : (
        <Container sx={{ padding: '60px 0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`}
              />
              <Typography variant="h3" data-test="temperature-typography">
                {getCelciusFromKelvin(list[0].main.temp)}
              </Typography>
              <Typography
                variant="h5"
                sx={{ paddingBottom: '15px', marginRight: '15px' }}
              >
                &#8451;
              </Typography>
              <Box
                component="div"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="caption" sx={{ lineHeight: 'inherit' }}>
                  Humidity: {list[0].main.humidity}%
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: 'inherit' }}>
                  Pressure: {list[0].main.pressure}hPa
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: 'inherit' }}>
                  Temp max: {getCelciusFromKelvin(list[0].main.temp_max)}
                  &#8451;
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: 'inherit' }}>
                  Temp min: {getCelciusFromKelvin(list[0].main.temp_min)}
                  &#8451;
                </Typography>
                <Typography variant="caption" sx={{ lineHeight: 'inherit' }}>
                  Wind speed: {list[0].wind.speed} metre/sec
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4">
                {city.name}, {city.country}
                <br />
              </Typography>
              <Typography variant="subtitle1">
                {new Date().toISOString().slice(0, 10)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'nowrap',
              overflow: 'scroll',
              padding: '0 5px',
            }}
          >
            {list.map((item: IWeatherList) => (
              <Box key={item.dt}>
                <Card sx={{ margin: '10px 0', width: '140px' }}>
                  <CardContent>
                    <Typography sx={{ lineHeight: '15px' }} variant="h6">
                      <Typography variant="body2">{item.dt_txt}</Typography>
                      <br />
                      {getCelciusFromKelvin(item.main.temp)}
                      &#8451;
                    </Typography>
                    <CardMedia
                      sx={{ width: 60 }}
                      component="img"
                      image={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    ></CardMedia>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      )}
    </MainLayout>
  );
};

export default DetailsPage;
