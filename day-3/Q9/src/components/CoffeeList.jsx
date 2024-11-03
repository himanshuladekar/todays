import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoffee } from '../thunk/fetchCoffeeThunk';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const { coffeeList, loading, error } = useSelector((state) => state);
  console.log(coffeeList);
  
  useEffect(() => {
    // Fetch coffee data on component mount
    dispatch(fetchCoffee('asc'));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="coffee-grid">
      {coffeeList?.map((coffee) => (
        <div key={coffee.id} className="coffee-item">
          <h3>{coffee.title}</h3>
          <p>Price: {coffee.price}</p>
          <img src={coffee.image} alt={coffee.title} />
        </div>
      ))}
    </div>
  );
};

export default CoffeeList;
