import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    // Just like <Form> except it doesn't cause a navigation.
    // 1) create a Form , any form need an action
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

// 2) create a action fun , it gets from react router a request , params as an argument
export const action = async ({ params }) => {
  const order = { priority: true };
  await updateOrder(params.orderId, order);
  return null;
};
