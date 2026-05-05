import aniwatchLogo from "../img/aniwatchLogo.png";

export default function HomeView() {
  return (
    <div>
      {/* TODO: Replace with your own landing-page copy. Tell a first-time
          visitor what this app does and why they'd use it. */}
      <img src={aniwatchLogo} alt="AniWatch logo" />
      <h1>Welcome to AniWatch</h1>
      <p>
        Track animes you've watched, plan to watch, or have finished! Sign up or
        sign in to add, edit, or delete items.
      </p>
    </div>
  );
}
