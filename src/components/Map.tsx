import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuZGFuMTIzNCIsImEiOiJjbTZlcm9wc3AxNmFoMmlzZDdpbDVlajllIn0.VVa3FhFkF3wv6vEmPWiCtQ'; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      // center: [87.8614793, 23.2324214], // Bardhaman coordinates
      center: [87.8666896, 23.2365426],
      zoom: 12
    });

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([87.8614793, 23.2324214])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;