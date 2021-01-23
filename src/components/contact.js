function Contact(contact) {
  const props = contact.props;

  return (
    <div className="contactCardWrapper">
      <div className="contactCard">
        <div className="profile-image-wrapper">
          <img
            src={props.profile_image}
            loading="lazy"
            alt={props.name}
            className="profile-image"
          />
        </div>
        <div className="contactDetails">
          <div className="basicDetails">
            <img
              src={props.icon}
              className="icon"
              loading="lazy"
              alt={props.name}
              width="40"
              height="40"
            />
            <div className="name">{props.name}</div>
            <div className="jobAndCompany">
              {props.job} | {props.company_name}
            </div>
          </div>
          <div className="phone">Phone Number {props.phone}</div>
          <div className="email">{props.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
