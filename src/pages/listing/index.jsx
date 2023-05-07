import CardListingMapper from "./cardListingMapper";
import { cultureList, eventsList, placesList, servicesList } from "./listins";


function Listing() {
  return ( <>
  <CardListingMapper cardData={placesList} to="places" heading="Adresses Culinaires"/>
  <CardListingMapper cardData={eventsList} to="events" heading="Agenda"/>
  <CardListingMapper cardData={servicesList} to="places" heading="Annuaire Libanais"/>
  <CardListingMapper cardData={cultureList} to="places" heading="Culture"/>
  </> );
}

export default Listing;
