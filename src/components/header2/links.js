export const links = [
  {
    //events page
    name: "Liste des activités",
    path: "/events",
    dropdown: [
      { name: "Événements", path: "/events/events" },
      { name: "Activités", path: "/events/activities" },
      { name: "Soirées", path: "/events/evenings" },
    ],
  },
  {
    //dynamic place page for subPaths
    name: "Annuaire Libanais",
    path: "/services",
    dropdown: [
      { name: "Santé & bien-être", path: "/services/health" },
      { name: "Alimentation", path: "/services/food" },
      { name: "Prêt-à-porter", path: "/services/readytowear" },
      { name: "Services", path: "/services/services" },
      { name: "Communautés", path: "/services/community" },
      { name: "Lieux de culte", path: "/services/places" },
      { name: "Salles à louer", path: "/services/rentalspaces" },
    ],
  },
  {
    //dynamic place page for subPaths
    name: "Identité culturelle",
    path: "/culture",
    dropdown: [
      { name: "Associations", path: "/culture/associations" },
      { name: "Cours", path: "/culture/courses" },
    ],
  },
  {
    //dynamic place page for subPaths
    name: "Adresses Culinaires",
    path: "/places",
    dropdown: [
      { name: "Traiteurs", path: "/places/caterers" },
      { name: "Restaurants", path: "/places/restaurants" },
      { name: "Épiceries", path: "/places/groceries" },
      { name: "Pâtisseries", path: "/places/pastryshops" },
      { name: "Nos Adresses", path: "/places/ouraddresses" },
      { name: "Gastronomie", path: "/places/gastronomy" },
      { name: "Streetfood", path: "/places/streetfood" },
      { name: "Restaurant du mois", path: "/places/restaurantofthemonth" },
      { name: "Nouveautés", path: "/places/news" },
    ],
  },
  {
    //post :id page for subPaths
    name: "Annonces & Opportunités",
    path: "/classifieds",
    dropdown: [
      { name: "Emploi", path: "/classifieds/jobs" },
      { name: "Logement", path: "/classifieds/housing" },
      { name: "Vente/location", path: "/classifieds/sale" },
    ],
  },
  {
    //post :id page for subPaths
    name: "Bons Plans",
    path: "/deals",
    dropdown: [
      { name: "Activités gratuites", path: "/deals/activities" },
      { name: "Invitations offertes", path: "/deals/invitations" },
      { name: "Réductions", path: "/deals/discounts" },
    ],
  },
  {
    //post :id page for subPaths
    name: "Actualités",
    path: "/news",
    dropdown: [
      { name: "Blog", path: "/news/blog" },
      { name: "Tourisme & Voyages", path: "/news/tourism" },
      { name: "Jeunesse", path: "/news/youth" },
    ],
  },
];
