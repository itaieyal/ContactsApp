import Contacts from "./components/contacts";
import Search from "./components/search";
import React from "react";
import Spinner from "./assets/spinner.png";

const APP_STATES = {
  UP: 0,
  LOADING: 1,
  ERROR: 2,
};

const API_ENDPOINT = "https://candidate-test.herokuapp.com/contacts";
const SUCCESS_STATUS = 200;

const ERROR_MESSAGE = "An error occured while getting your contacts.";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      displayedContacts: [],
      appState: APP_STATES.LOADING,
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
    xhr.onreadystatechange = () => {
      if (
        xhr.readyState === XMLHttpRequest.DONE &&
        xhr.status === SUCCESS_STATUS
      ) {
        const contacts = JSON.parse(xhr.responseText);
        this.setState({
          contacts: contacts,
          displayedContacts: contacts,
          appState: APP_STATES.UP,
        });
      } else {
        this.setState({
          appState: APP_STATES.ERROR,
        });
        console.error("Failed to fetch contacts");
      }
    };
    xhr.send();
  }

  reloadClickHandler() {
    this.setState({
      appState: APP_STATES.LOADING,
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

  _getLoadingState() {
    return (
      <div className="spinner">
        <img src={Spinner} alt="Loading..." width="60px" height="60px" />
      </div>
    );
  }

  _getErrorState() {
    return (
      <div className="errorState">
        {ERROR_MESSAGE}{" "}
        <span className="reloadLink" onClick={() => this.handleReloadClick()}>
          Reload
        </span>
      </div>
    );
  }

  getAppBody(appState) {
    switch (appState) {
      case APP_STATES.UP:
        return <Contacts contacts={this.state.displayedContacts} />;
      case APP_STATES.LOADING:
        return this._getLoadingState();
      case APP_STATES.ERROR:
        return this._getErrorState();
      default:
        console.error("Unknown app state!");
        return this._getErrorState();
    }
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="appTitle headerItem">Contact List</div>
          <div className="inputContainer headerItem">
            <Search handleSearchKeyUp={this.handleSearchKeyUp} />
          </div>
        </div>
        <div className="appBody">{this.getAppBody(this.state.appState)}</div>
      </div>
    );
  }
}

export default App;
