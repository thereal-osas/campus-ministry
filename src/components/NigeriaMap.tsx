import nigeriaMap from "@svg-maps/nigeria";

type NigeriaLocation = { id: string; name: string; path: string };

const mapPoints = [
  { id: "benin", label: "Benin", x: 203, y: 440 },
  { id: "ibadan", label: "Ibadan", x: 110, y: 382 },
  { id: "lagos", label: "Lagos", x: 82, y: 430 },
  { id: "ilorin", label: "Ilorin", x: 190, y: 270 },
  { id: "osun", label: "Osun", x: 137, y: 400 },
  { id: "abeokuta", label: "Abeokuta", x: 105, y: 345 },
  { id: "akure", label: "Akure", x: 180, y: 370 },
  { id: "delta", label: "Delta", x: 220, y: 450 },
  { id: "port-harcourt", label: "Port Harcourt", x: 280, y: 567 },
  { id: "owerri", label: "Owerri", x: 295, y: 485 },
  { id: "calabar", label: "Calabar", x: 380, y: 530 },
  { id: "enugu", label: "Enugu", x: 299, y: 410 },
  { id: "uyo", label: "Uyo", x: 330, y: 510 },
  { id: "minna", label: "Minna", x: 260, y: 220 },
  { id: "abuja", label: "Abuja", x: 304, y: 288 },
  { id: "jos", label: "Jos", x: 380, y: 240 },
];

export function NigeriaMap() {
  return (
    <div className="map-stage" aria-label="Chapter locations across Nigeria">
      <svg viewBox={nigeriaMap.viewBox} preserveAspectRatio="xMidYMid meet" className="nigeria-map" role="img" aria-label="Map of Nigeria showing chapter locations">
        <g className="nigeria-states">
          {(nigeriaMap.locations as NigeriaLocation[]).map((location) => (
            <path key={location.id} d={location.path} aria-label={location.name} />
          ))}
        </g>
        <g className="nigeria-markers">
          {mapPoints.map((point, index) => (
            <g
              key={point.id}
              className="nigeria-marker"
              transform={`translate(${point.x} ${point.y})`}
              tabIndex={0}
              role="button"
              aria-label={`${point.label}, Nigeria`}
            >
              <circle className="marker-halo" r="13" style={{ animationDelay: `${index * 0.16}s` }} />
              <circle className="marker-dot" r="5" />
              <text className="marker-label" x="11" y="4">{point.label}</text>
            </g>
          ))}
        </g>
      </svg>
      <span className="map-label">Nigeria</span>
    </div>
  );
}