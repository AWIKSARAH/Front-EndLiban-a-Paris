export const links = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/" },
  { name: "Services", path: "/" },
  { name: "Event", path: "#", dropdown: [
    { name: "Evenements", path: "#" },
    { name: "Activities", path: "#" },
    { name: "Soirees", path: "#" }
  ]},
  { name: "Places", path: "/places", dropdown: [
    { name: "Restaurant", path: "/places/restaurant" },
    { name: "NGO", path: "/places/ngo" },
    { name: "Clubs", path: "/places/clubs" },
  ]},
  { name: "Add Listing", path: "/listing" },
  { name: "About Us", path: "/about" }
];
