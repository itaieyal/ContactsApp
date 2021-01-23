import Contacts from "./components/contacts";
import React from "react";
import searchIcon from "./assets/searchIcon.png";

const API_ENDPOINT = "https://candidate-test.herokuapp.com/contacts";
const SUCCESS_STATUS = 200;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      displayedContacts: [],
      loading: true,
      errorState: false,
    };

    this.handleSearchKeyUp = this.searchKeyUpHandler.bind(this);
    this.handleReloadClick = this.reloadClickHandler.bind(this);
  }

  componentDidMount() {
    this._fetchContacts();
  }

  _fetchContacts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_ENDPOINT);
    xhr.onload = () => {
      if (xhr.status === SUCCESS_STATUS) {
        const contacts = JSON.parse(xhr.responseText);
        this.setState({
          contacts: contacts,
          displayedContacts: contacts,
          loading: false,
          errorState: false,
        });
      } else {
        this.setState({
          loading: false,
          errorState: true,
        });
        console.error("Failed to fetch contacts");
      }
    };
    xhr.send();
  }

  reloadClickHandler() {
    this.setState({
      loading: true,
      errorState: false,
    });
    this._fetchContacts();
  }

  searchKeyUpHandler(searchString) {
    const lowerCaseSearchString = searchString.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) => {
      const name = contact.name.toLowerCase();
      const job = contact.job.toLowerCase();
      const email = contact.email.toLowerCase();
      const companyName = contact.company_name.toLowerCase();
      const phone = contact.phone.toLowerCase();

      return (
        name.indexOf(lowerCaseSearchString) !== -1 ||
        job.indexOf(lowerCaseSearchString) !== -1 ||
        email.indexOf(lowerCaseSearchString) !== -1 ||
        companyName.indexOf(lowerCaseSearchString) !== -1 ||
        phone.indexOf(lowerCaseSearchString) !== -1
      );
    });

    this.setState({
      displayedContacts: filteredContacts,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="appTitle headerItem">Contact List</div>
          <div className="inputContainer headerItem">
            <span className="searchInputWrapper">
              <input
                className="searchInput"
                placeholder="Search..."
                onKeyUp={(event) => this.handleSearchKeyUp(event.target.value)}
              />
              <img src={searchIcon} alt="search icon" className="searchIcon" />
            </span>
          </div>
        </div>
        <div className="appBody">
          {this.state.errorState ? (
            <div className="errorState">
              An error has occured.{" "}
              <span
                className="reloadLink"
                onClick={() => this.handleReloadClick()}
              >
                Reload
              </span>
            </div>
          ) : (
            <Contacts
              isLoading={this.state.loading}
              contacts={this.state.displayedContacts}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
