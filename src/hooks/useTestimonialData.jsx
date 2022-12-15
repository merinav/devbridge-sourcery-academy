import { useState, useEffect } from 'react';

export function useTestimonialData() {
  const [testimonials, setTestimonials] = useState([]);
  const testimonialData = 'https://www.jurele.lt/testimonials.json';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(testimonialData);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      // TODO: more complete error handling will be implemented with ticket XXX
      console.error(error);
    }
  };

  return testimonials;
}
