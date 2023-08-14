import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={deleteHandler}>
      Delete
    </Button>
  );
};

export default DeleteItem;
