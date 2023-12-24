import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to="/second-page" >
      <button>Go to Second Page</button>
    </Link>
  );
}

export default Button;