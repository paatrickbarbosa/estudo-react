import './index.css';
import SectionOne from './Secao/SectionOne';
import SectionTwo from './Secao/SectionTwo';
import SectionThree from './Secao/SectionThree';

function Home() {
  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionTwo/>
    </div>
  );
}

export default Home;