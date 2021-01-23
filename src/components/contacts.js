import Contact from "./contact";

function Contacts(props) {
  const { contacts } = props;
  return contacts.length === 0 ? (
    <div className="noContactsMessage">No contacts to display</div>
  ) : (
    <div id="contactsContainer">
      {contacts.map((contact, index) => {
        return <Contact props={contact} key={index}></Contact>;
      })}
    </div>
  );
}

export default Contacts;
