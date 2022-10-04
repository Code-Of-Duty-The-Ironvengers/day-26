import { useContext } from "react";
import { UserContext } from "../App";

export default function Navbar() {
  const { user } = useContext(UserContext);
  return <div>Hey {user.username}</div>;
}
