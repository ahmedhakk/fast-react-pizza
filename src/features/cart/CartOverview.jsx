import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useLocation } from "react-router-dom";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const location = useLocation();
  const isInCartPage = location.pathname === "/cart";

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto flex items-center justify-between  p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        {!isInCartPage && <Link to="/cart">Open cart &rarr;</Link>}
      </div>
    </div>
  );
}

export default CartOverview;
