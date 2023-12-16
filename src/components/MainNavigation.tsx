import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">客房旅宿</Link>
        </li>
        <li>
          <Link to="/login">會員登入</Link>
        </li>
        <li>
          <Link to="/signup">註冊</Link>
        </li>
        <li>
          <Link to="/ui">共用元件</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
