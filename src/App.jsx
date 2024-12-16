import Community from "./Component/Community";
import Expat from "./Component/Expat";
import Faq from "./Component/Faq";
import Header from "./Component/Header/Header";
import Members from "./Component/Members";
import SingleCard from "./Component/SingleCard";
import Traveler from "./Component/Traveler";
import Works from "./Component/Works";

const App = () => {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <SingleCard></SingleCard>
      <Community></Community>
      <Traveler></Traveler>
      <Expat></Expat>
      <Works className="bg-white"></Works>
      <Members></Members>
      <Faq></Faq>
    </div>
  );
};

export default App;
