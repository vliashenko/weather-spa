import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from 'stores/store';
import { deleteCityFromSaved, getCurrentWeatherByCity } from '../services';
import '../styles';
import { DeleteIcon } from 'shared/ui';

export default function CityList() {
  const dispatch = useAppDispatch();
  const { cities } = useSelector((state: RootState) => state.cities);

  const onGetWeatherClick = (city: string) => dispatch(getCurrentWeatherByCity(city));
  const onRemoveClick = (city: string) => dispatch(deleteCityFromSaved(city));
  return (
    <div className="city-list-wrapper">
      {cities.map((city) => {
        return (
          <div key={city} className="city-card" onClick={() => onGetWeatherClick(city)}>
            <div className="city-card-wrapper">
              <p>{city}</p>
              <button className="delete-button" onClick={() => onRemoveClick(city)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
