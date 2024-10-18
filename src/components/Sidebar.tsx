import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/download">Download</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
