export default function HomePageDashboard({ username }) {
  return (
    <div>
      <HomePageDashboardCard username={username} />
    </div>
  );
}

function HomePageDashboardCard({ username }) {
  return (
    <div>
      Projects worked on by a person. Lets give this person some credits?
      <HomePageDashboardCardText username={username} />
    </div>
  );
}

function HomePageDashboardCardText({ username }) {
  return <h1>Credits to {username}</h1>;
}
