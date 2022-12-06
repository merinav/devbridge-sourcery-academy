import { useState, useEffect } from 'react';

export function useTestimonialData() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.jurele.lt/testimonials.json');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error(error);
    }
  };

  return testimonials;
}
