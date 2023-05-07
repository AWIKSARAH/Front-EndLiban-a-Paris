import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardDataGenerator({ children,type }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${type}/latest`)
      .then((response) => setCards(response.data.data.docs));
  }, []);

  return <>{children(cards)}</>;
}
