import { genRandomInt } from "../../utils/utilFunction";
import ReactIcon from '../../assets/react-core-concepts.png'
import { reactDescriptions } from "../../data/DescriptionData";


function Header() {
    return (
      <>
        <header>
          <img src={ReactIcon} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(reactDescriptions.length)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      </>
    )
  }
  export default Header;