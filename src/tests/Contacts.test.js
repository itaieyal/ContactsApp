import { render } from "@testing-library/react";
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
  {
    name: "HoneyBook",
    job: "",
    company_name: "HoneyBook",
    phone: "123.456.7890",
    email: "shadiah@honeybook.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Claire Fairbank",
    job: "Florist",
    company_name: "The Flower Unique Designs",
    phone: "123.456.7890",
    email: "florist@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Blake Solomon",
    job: "Graphic Designer",
    company_name: "Paperie By Blake",
    phone: "123.456.7890",
    email: "paperie@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Stephanie Parker",
    job: "Event Planner",
    company_name: "Amor Events",
    phone: "123.456.7890",
    email: "test@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Jennifer Bowie",
    job: "Florist",
    company_name: "Jennifer Bowie Flowers",
    phone: "123.456.7890",
    email: "floristqa@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "John Kramer",
    job: "Event Planner",
    company_name: "John Kramer Events Inc. ",
    phone: "123.456.7890",
    email: "demo@honeybook.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Alexis Jenkins",
    job: "Event Planner",
    company_name: "Account Building",
    phone: "",
    email: "accountbuilding@honeybook.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Leslie",
    job: "Event Planner",
    company_name: "Planning ABC ",
    phone: "925 818 1267",
    email: "plannerleslie@email.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "yona levine",
    job: "Rentals Manager",
    company_name: "yona's company",
    phone: "",
    email: "asdf@vendor.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "dff",
    job: "Event Planner",
    company_name: "dfdfdf",
    phone: "",
    email: "shaybloch@dsd.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Leslie Wong",
    job: "Event Planner",
    company_name: "Leslie Planning 123 ",
    phone: "",
    email: "leslie@planner123.com",
    profile_image: null,
    icon: null,
  },
  {
    name: "Naama Alon",
    job: "Event Planner",
    company_name: "Naama Alon - Event Planner",
    phone: "123.456.789",
    email: "naama76@gmail.com",
    profile_image: null,
    icon: null,
  },
];

describe("When isLoading=false", () => {
  test("Contacts should be displayed", () => {
    render(<Contacts isLoading={false} contacts={mockContacts} />);
    const contacts = document.querySelectorAll(".contactCardWrapper");

    expect(contacts.length).toEqual(mockContacts.length);
  });
});

describe("When isLoading=true", () => {
  test("Contacts should not be displayed", () => {
    render(<Contacts isLoading={true} contacts={mockContacts} />);
    const contacts = document.querySelectorAll(".contactCardWrapper");

    expect(contacts.length).toEqual(0);
  });
});
