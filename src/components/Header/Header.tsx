import { Logo } from '../icons';
import Pagination from '../Pagination';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo width="2rem" height="2rem" color="#000000" />
      <Pagination />
    </div>
  );
};

export default Header;
