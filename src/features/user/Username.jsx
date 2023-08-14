import { useSelector } from "react-redux";

const Username = () => {
  // useSelector - to take a state value from the store
  // const stateNameToUse = userSelector((state) => state.sliceName.stateName)
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return <div className="hidden text-sm font-bold md:block">{username}</div>;
};

export default Username;
