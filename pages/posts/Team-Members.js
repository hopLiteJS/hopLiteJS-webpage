
import NavBar from '../../components/NavBar';
import Footer from '../../components/LandingPage/Footer';
import Person1 from '../../components/TeamMembers/Person1';
import Person2 from '../../components/TeamMembers/Person2';
import Person3 from '../../components/TeamMembers/Person3';
import Person4 from '../../components/TeamMembers/Person4';
export default function Team_Members() {
  return (
    <div className={"Team_Members"}>
      <NavBar /> 
      <h1>Team-Members</h1>
      <Person1 />
      <Person2 />
      <Person3 />
      <Person4 />
      <Footer />
    </div>
  )
}