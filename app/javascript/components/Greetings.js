
import React, { useEffect } from 'react';
import { fetchGreetings } from '../store/greetings/greetingSlice';
import { useDispatch, useSelector } from 'react-redux';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="card">
          <div className="card-header bg-info text-white">
            <h2 className="text-center">Greetings</h2>
          </div>
          <div className="card-body text-center">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            {greeting && <p className="text-success display-3">{greeting}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
