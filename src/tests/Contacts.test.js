import { render, screen } from "@testing-library/react";
import Contacts from "../components/Contacts";

const mockContacts = [
  {
    name: "Luke Peterson",
    job: "Photographer & Videographer",
    company_name: "Clear Shoot Photography",
    phone: "123.456.7890",
    email: "photo@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Sophia Garcia",
    job: "Hair Stylist, Makeup Artist",
    company_name: "Belle By Sophia",
    phone: "123.456.7890",
    email: "hair@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Shira Mendez",
    job: "Event Planner",
    company_name: "Shira Mendez Design",
    phone: "123.456.7890",
    email: "plannerqa@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Stephanie Parker",
    job: "Wedding Planner",
    company_name: "Amor Events",
    phone: "415 409 9876",
    email: "planner@email.com",
    profile_image: null,
    icon: null,
  },
];

describe("When there are contacts to display", () => {
  test("Contacts should render", () => {
    render(<Contacts contacts={mockContacts} />);
    const contacts = document.querySelectorAll(".contactCardWrapper");

    expect(contacts.length).toEqual(mockContacts.length);
  });
});

describe("When there are no contacts to display", () => {
  test("Contacts should not be rendered, and a 'no contacts' message should show", () => {
    render(<Contacts contacts={[]} />);
    const contacts = document.querySelectorAll(".contactCardWrapper");
    const noContactsMessage = screen.getByText(/No contacts to display/i);

    expect(contacts.length).toEqual(0);
    expect(noContactsMessage).toBeInTheDocument();
  });
});
