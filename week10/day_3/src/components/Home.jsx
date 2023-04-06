import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./Jumbotron";
import SearchBar from "./SearchBar";
import FilmCarousel from "./FilmCarousel";

const Home = () => {
  // Inizializza lo stato per la query di ricerca
  const [searchQuery, setSearchQuery] = useState("");

  // Funzione per gestire l'azione di ricerca dal componente SearchBar
  const handleSearch = (searchQuery) => {
    // gestione degli white space nel campo di ricerca
    setSearchQuery(searchQuery.replace(/\s+/g, "%20"));
  };

  // Endpoint per la ricerca statica
  const potter = "harry%20potter";
  const marvel = "marvel";
  const starWars = "star%20wars";
  const bond = "spy";
  const spongebob = "spongebob";

  return (
    <div>
      <Jumbotron />
      <h2 className="collectionTitle">Search</h2>
      <SearchBar onSearch={handleSearch} />
      {searchQuery && (
        <>
          <h2 className="collectionTitle">Search Results</h2>
          <FilmCarousel myEndpoint={searchQuery} />
        </>
      )}

      {/* Impossibile trovare una query di ricerca "soddisfacente" per i titoli dinamici, i risultati erano tipo "potter" che come titolo non è il massimo */}
      <h2 className="collectionTitle">
        The Boy Who Lived - Harry Potter's Saga
      </h2>
      <FilmCarousel myEndpoint={potter} />
      <h2 className="collectionTitle">Star Wars - The Original Sixology :</h2>
      <FilmCarousel myEndpoint={starWars} />
      <h2 className="collectionTitle">Action - Spy Movies</h2>
      <FilmCarousel myEndpoint={bond} />
      <h2 className="collectionTitle">
        Latest from Marvel Cinematic Universe :
      </h2>
      <FilmCarousel myEndpoint={marvel} />
      <h2 className="collectionTitle">SpongeBob Cinematic Universe:</h2>
      <FilmCarousel myEndpoint={spongebob} />
    </div>
  );
};

export default Home;
