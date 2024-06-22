import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { logout } from "store/user/userSlice";


const LogoutPageLogic = () => {
  const dispatch = useDispatch<AppDispatch>();

 return (
<button onClick={() => dispatch(logout())}>Logout</button>)
}

export default LogoutPageLogic;