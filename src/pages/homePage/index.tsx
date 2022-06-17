import MainLayout from '../../layout/mainLayout';
import Card from '../../components/cards';
import { useWeather } from '../../hooks/useWeather';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const HomePage = () => {
  const { weather, updateOrAddWeather, deleteWeather } = useWeather();

  return (
    <MainLayout data-test="details-home-page">
      <Typography
        variant="h4"
        component="div"
        data-test="weather-title"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        Find out the current weather around the world
      </Typography>
      <Container
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {weather.length > 0 &&
          weather.map((item: any) => (
            <Card
              key={item.id}
              deleteWeather={deleteWeather}
              updateOrAddWeather={updateOrAddWeather}
              {...item}
            />
          ))}
      </Container>
    </MainLayout>
  );
};

export default HomePage;
