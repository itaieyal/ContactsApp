import Spinner from "../assets/spinner.png";
import Contact from "./contact";

function Contacts(props) {
  const { contacts, isLoading } = props;
  return isLoading ? (
    <div className="spinner">
      <img src={Spinner} alt="Loading..." width="60px" height="60px" />
    </div>
  ) : (
    <div id="contactsContainer">
      {contacts.map((contact, index) => {
        return <Contact props={contact} key={index}></Contact>;
      })}
    </div>
  );
}

export default Contacts;
