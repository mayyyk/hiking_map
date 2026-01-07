const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/liberty', // Możesz tu podać własny styl JSON
    center: [19.9, 49.3], // Centrum na Tatry
    zoom: 9
});


map.on('load', async () => {
    const response = await fetch('data_map.json');
    const data = await response.json();

    // Dodajemy dane do silnika MapLibre
    map.addSource('my_tracks', {
        type: 'geojson',
        data: data
    });

    map.addSource('terrainRGB', {
        type: 'raster-dem',
        url: 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=1wdBRu6JUT7YBsGUoyqN',
        tileSize: 256
    });

    map.setTerrain({ 'source': 'terrainRGB', 'exaggeration': 1.5 }); // Włącz 3D!

    map.addLayer({
            'id': 'route-layer',
            'type': 'line',
            'source': 'my_tracks',
            'layout': {
                'line-cap': 'round',
                'line-join': 'round'
            },
            'paint': {
                'line-color': '#e67e22',
                'line-width': 4,
                'line-opacity': 0.8
            }
        });
        
    // Interakcja: Kliknięcie w trasę pokazuje jej nazwę
    map.on('click', 'route-layer', (e) => {
        const name = e.features[0].properties.name;
        new maplibregl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`<strong>Trasa:</strong> ${name}`)
            .addTo(map);
    });
});