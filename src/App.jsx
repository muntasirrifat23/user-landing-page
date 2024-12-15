import Community from "./Component/Community/Community";
import Header from "./Component/Header/Header";
import SingleCard from "./Component/SingleCard/SingleCard";

const App = () => {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <SingleCard></SingleCard>
      <Community></Community>
    </div>
  );
};

export default App;
