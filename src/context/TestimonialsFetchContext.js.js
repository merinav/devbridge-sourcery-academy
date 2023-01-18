import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

const TestimonialsFetchContext = React.createContext({});

const TESTIMONIALS_ENDPOINT =
  'https://raw.githubusercontent.com/aistegerd/testimonials-mock-data/main/testimonials.json';

const TestimonialsFetchProvider = ({ children }) => {
  const [testimonialData, setTestimonialData] = useState([]);
  const {
    isLoading: testimonialsAreLoading,
    error: testimonialsError,
    sendRequest,
  } = useFetch();

  useEffect(() => {
    const fetchedTestimonialsHandler = (fetchedTestimonialsArray) => {
      setTestimonialData(fetchedTestimonialsArray);
    };

    sendRequest({ url: TESTIMONIALS_ENDPOINT }, fetchedTestimonialsHandler);
  }, []);

  return (
    <TestimonialsFetchContext.Provider
      value={{ testimonialData, testimonialsAreLoading, testimonialsError }}
    >
      {children}
    </TestimonialsFetchContext.Provider>
  );
};

const useTestimonialsData = () => {
  return useContext(TestimonialsFetchContext);
};

TestimonialsFetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TestimonialsFetchProvider, useTestimonialsData };
