import Contact from "./contact";

const NO_CONTACTS_MESSAGE = "No contacts to display";

function Contacts(props) {
  const { contacts } = props;
  return contacts.length === 0 ? (
    <div className="noContactsMessage">{NO_CONTACTS_MESSAGE}</div>
  ) : (
    <div id="contactsContainer">
      {contacts.map((contact, index) => {
        return <Contact props={contact} key={index}></Contact>;
      })}
    </div>
  );
}

export default Contacts;
