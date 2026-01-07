import os
from pathlib import Path

import geojson # formatting, serialization for points and lines
import gpxpy # parser from .gpx format


def convert_gpx_to_geojson(folder_path):
    features = []

    for gpx_file in Path(folder_path).glob("*.gpx"):
        with open(gpx_file, "r", encoding='utf-8') as f:
            gpx = gpxpy.parse(f)

        for track in gpx.tracks:
            for segment in track.segments:
                coords = [(p.longitude, p.latitude) for p in segment.points]

                line = geojson.LineString(coords)

                feature = geojson.Feature(geometry=line, properties={"name": gpx_file.stem})

                features.append(feature)

    feature_collection = geojson.FeatureCollection(features)

    with open("data_map.json", "w") as f:
        geojson.dump(feature_collection, f)

convert_gpx_to_geojson("./tracks")

