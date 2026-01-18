# 🥾 Hiking Map

**Transform GPX tracks into interactive 3D terrain visualizations with one command.**

---

## 📸 Demo

[![Watch the video](https://cdn.loom.com/sessions/thumbnails/fe77de9626d24b6cbdccee0ba54708a4-with-play.gif)](https://www.loom.com/share/fe77de9626d24b6cbdccee0ba54708a4)

---

## About

**Hiking Map** is a lightweight geospatial visualization tool that converts GPS Exchange Format (GPX) tracks into interactive web-based maps with 3D terrain rendering.  It solves the common challenge of visualizing multiple hiking routes in a unified, browser-accessible interface without requiring desktop GIS software or complex dependencies.

The system parses GPX files, serializes them into GeoJSON, and renders them on a MapLibre GL JS canvas with OpenFreeMap tiles and terrain RGB elevation data.  Perfect for trail documentation, route planning, or creating shareable hiking portfolios.

---

## 🛠 Tech Stack

- **Python 3.x** – GPX to GeoJSON conversion pipeline
- **gpxpy** – GPX file parsing
- **geojson** – Feature serialization
- **MapLibre GL JS** – Client-side map rendering engine
- **OpenFreeMap** – Open-source map tiles (Liberty style)
- **MapTiler Terrain RGB** – Elevation data for 3D terrain exaggeration
- **Vanilla JavaScript** – Map logic and interactivity

---

## ✨ Key Features

- **Batch GPX Processing** – Automatically converts all `.gpx` files in a directory to a unified GeoJSON collection
- **3D Terrain Rendering** – Displays routes with 1.5x elevation exaggeration for enhanced topographic visualization
- **Interactive Route Inspection** – Click any track to display its metadata in a popup overlay
- **Zero Backend Required** – Static HTML deployment; runs entirely in the browser after data generation

---

## 🚀 Installation & Usage

### Prerequisites
```bash
python3 -m venv venv
source ./venv/bin/activate 
pip install gpxpy geojson
```

### Quick Start

1. **Add GPX files** to the `tracks/` directory
2. **Generate map data:**
   ```bash
   python main.py
   ```
3. **Serve the application:**
   ```bash
   python -m http.server 8000
   ```
4. **Open** `http://localhost:8000` in your browser

Alternatively you can use live server in VS Code.

### File Structure
```
hiking_map/
├── tracks/          # Place your . gpx files here
├── main.py          # GPX → GeoJSON converter
├── index.html       # Map interface
├── map_logic.js     # MapLibre configuration
└── data_map.json    # Generated GeoJSON (auto-created)
```

---

**Built with ❤️ for the hiking community**

---

**License**: MIT (add LICENSE file if applicable)  
**Author**: [@mayyyk](https://github.com/mayyyk)
