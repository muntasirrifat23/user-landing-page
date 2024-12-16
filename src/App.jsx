import Community from "./Component/Community";
import Expat from "./Component/Expat/Expat";
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
      <Expat></Expat>
    </div>
  );
};

export default App;
