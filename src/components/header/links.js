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
    { name: "A", path: "#" },
    { name: "B", path: "#" },
    { name: "C", path: "#" },
    { name: "D", path: "#" }
  ]},
  { name: "Add Listing", path: "/listing" },
  { name: "About Us", path: "/about" }
];
