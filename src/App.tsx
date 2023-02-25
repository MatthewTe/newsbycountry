import React from 'react';
import logo from './logo.svg';
import './App.css';

// Simple Maps Imports:
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoURL: string = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function App() {
  return (
    <ComposableMap>
      <Geographies geography={geoURL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )}

export default App;
