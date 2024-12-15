import Community from "./Component/Community";
import Header from "./Component/Header/Header";
import SingleCard from "./Component/SingleCard";
import Traveler from "./Component/Traveler";

const App = () => {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <SingleCard></SingleCard>
      <Community></Community>
      <Traveler></Traveler>
    </div>
  );
};

export default App;
