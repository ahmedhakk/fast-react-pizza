import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="border-b border-stone-200 bg-yellow-400">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>

        <SearchOrder />

        <Username />
      </div>
    </header>
  );
};

export default Header;
