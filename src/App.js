import './App.css';
import Friend from './friend.js'

function App() {
  return (
    <div class="text">
      <Friend tripTo = "Thatta" collegeFriend = "Ammar" schoolFriend = "Owais"></Friend>
      <hr></hr>
      <Friend tripTo = "Iftikhar Olympian Ground" collegeFriend = "Haris" schoolFriend = "Burhan"></Friend>
      <hr></hr>
      <Friend tripTo = "Behria Theme Park" collegeFriend = "Hassan Ali" schoolFriend = "Anas"></Friend>
    </div>
  );
}

export default App;
