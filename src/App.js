import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar logo="airbnb-logo.png" />
      <Hero photo="photo-grid.png" />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
