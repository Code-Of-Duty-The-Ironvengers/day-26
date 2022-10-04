import { useContext } from "react";
import { UserContext } from "../App";

export default function HomePageDashboard() {
  return (
    <div>
      <HomePageDashboardCard />
    </div>
  );
}

function HomePageDashboardCard() {
  return (
    <div>
      Projects worked on by a person. Lets give this person some credits?
      <HomePageDashboardCardText />
    </div>
  );
}

function HomePageDashboardCardText() {
  const { user } = useContext(UserContext);
  return <h1>Credits to {user.username}</h1>;
}
