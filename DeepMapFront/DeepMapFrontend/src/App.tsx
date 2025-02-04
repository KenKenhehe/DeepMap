import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css'

function App() {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGV0aW5neHU4OCIsImEiOiJjbTZoZmU2a2IwOG42MmpuMWRreTV0ZXllIn0.PS47A-mI4KCsrR1cNfaNSA'
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          center: [151.209900, -33.865143],
          zoom: 11.12
        });
    
        return () => {
          mapRef.current.remove()
        }
      }, [])

    return (
        <>
            <div id='map-container' ref={mapContainerRef}/>
        </>
    )
}

export default App
