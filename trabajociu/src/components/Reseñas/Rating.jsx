import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ score }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    // Si el índice es menor o igual al score, muestra una estrella llena
    if (i <= score) {
      stars.push(<FaStar key={i} color="#ffc107" style={{ margin: '0 1px' }} />);
    } else {
      // De lo contrario, muestra una estrella vacía
      stars.push(<FaRegStar key={i} color="#ffc107" style={{ margin: '0 1px' }} />);
    }
  }

  return <div style={{ display: 'flex', alignItems: 'center' }}>{stars}</div>;
};

export default Rating;