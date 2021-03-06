import React, {useState, useEffect} from 'react';
import {StaticMap, _MapContext as MapContext, NavigationControl} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import elec_data from './geotab.json';
import Contact from './contact';

const GAS_COLOR = [216, 180, 254]
const ELECTRIC_COLOR = [134, 239, 172];

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const DATA_URL = elec_data;



const ScatterMap = ({
    data = DATA_URL,
    radius = 6, 
    gasColor = GAS_COLOR, 
    electricColor = ELECTRIC_COLOR, 
    mapStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json', 
    height='80vh',
    width='80vw'
}) => {

useEffect(() => {
  if (!navigator.geolocation) {
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            setInitialViewState({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                zoom: 10,
                pitch: 10,
                bearing: 0
                })
        }, () => {})
    } 
    }, [])

const [initialViewState, setInitialViewState] = useState({
    longitude: -79.347015,
    latitude: 50.6532,
    zoom: 3,
    pitch: 10,
    bearing: 0
    });

  const layers = [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data,
      radiusScale: radius,
      radiusMinPixels: 1.2,
      getPosition: d => [d[0], d[1]],
      getFillColor: d => d[2] === 0 ? electricColor : gasColor,
      getRadius: 2,
      cluster: true,
      updateTriggers: {
        getFillColor: [gasColor,electricColor]
      }
    })
  ];

  const deckStyle = {
      position: 'relative',
  };
  
  return (
    <>
    <DeckGL width={width} height={height} layers={layers} initialViewState={initialViewState} controller={true} style={deckStyle} ContextProvider={MapContext.Provider}>
      <StaticMap width={width} height={height} reuseMaps mapStyle={mapStyle} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      <NavigationControl />
    </DeckGL>
  <Contact location={initialViewState} />
  </>
  );
}
export default ScatterMap