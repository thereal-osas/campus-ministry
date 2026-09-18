import nigeriaMap from "@svg-maps/nigeria";

type NigeriaLocation = { id: string; name: string; path: string };

const markers = [
  { name: "University of Lagos", city: "Lagos", x: 82, y: 430 },
  { name: "University of Ibadan", city: "Ibadan", x: 110, y: 382 },
  { name: "University of Abuja", city: "Abuja", x: 304, y: 288 },
  { name: "University of Nigeria", city: "Nsukka", x: 299, y: 410 },
  { name: "University of Port Harcourt", city: "Port Harcourt", x: 280, y: 567 },
  { name: "Ahmadu Bello University", city: "Zaria", x: 350, y: 145 },
  { name: "University of Benin", city: "Benin City", x: 203, y: 440 },
  { name: "University of Jos", city: "Jos", x: 380, y: 240 },
];

export function NigeriaMap() {
  return (
    <div className="map-stage" aria-label="Chapter locations across Nigeria">
      <svg viewBox={nigeriaMap.viewBox} className="nigeria-map" role="img" aria-label="Map of Nigeria showing chapter locations">
        <g className="nigeria-states">
          {(nigeriaMap.locations as NigeriaLocation[]).map((location) => (
            <path key={location.id} d={location.path} aria-label={location.name} />
          ))}
        </g>
        <g className="nigeria-markers">
          {markers.map((marker, index) => (
            <g
              key={marker.name}
              className="nigeria-marker"
              transform={`translate(${marker.x} ${marker.y})`}
              tabIndex={0}
              role="button"
              aria-label={`${marker.name}, ${marker.city}`}
            >
              <circle className="marker-halo" r="13" style={{ animationDelay: `${index * 0.16}s` }} />
              <circle className="marker-dot" r="5" />
              <text className="marker-label" x="11" y="4">{marker.city}</text>
            </g>
          ))}
        </g>
      </svg>
      <span className="map-label">Nigeria</span>
    </div>
  );
}