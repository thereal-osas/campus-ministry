import nigeriaMap from "@svg-maps/nigeria";
import { chapters } from "../data/chapters";

export function NigeriaMap() {
  return (
    <div className="map-stage" aria-label="Chapter locations across Nigeria">
      <svg viewBox={nigeriaMap.viewBox} className="nigeria-map" role="img" aria-label="Map of Nigeria showing chapter locations">
        <g className="nigeria-states">
          {nigeriaMap.locations.map((location) => (
            <path key={location.id} d={location.path} aria-label={location.name} />
          ))}
        </g>
        <g className="nigeria-markers">
          {chapters.map((chapter, index) => (
            <g
              key={chapter.id}
              className="nigeria-marker"
              transform={`translate(${chapter.mapX} ${chapter.mapY})`}
              tabIndex={0}
              role="button"
              aria-label={`${chapter.name}, ${chapter.city}`}
            >
              <circle className="marker-halo" r="13" style={{ animationDelay: `${index * 0.16}s` }} />
              <circle className="marker-dot" r="5" />
              <text className="marker-label" x="11" y="4">{chapter.city}</text>
            </g>
          ))}
        </g>
      </svg>
      <span className="map-label">Nigeria</span>
    </div>
  );
}