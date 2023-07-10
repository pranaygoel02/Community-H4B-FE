import { useState, memo, useMemo, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Map, {
  GeolocateControl,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  Source,
  Layer
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MdOutlineMyLocation } from "react-icons/md";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Pin from "../../components/pin";
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';

const CITIES = [
  {
    city: "New York",
    population: "8,175,133",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    state: "New York",
    latitude: 40.6643,
    longitude: -73.9385,
  },
  {
    city: "Los Angeles",
    population: "3,792,621",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg",
    state: "California",
    latitude: 34.0194,
    longitude: -118.4108,
  },
  {
    city: "Chicago",
    population: "2,695,598",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",
    state: "Illinois",
    latitude: 41.8376,
    longitude: -87.6818,
  },
  {
    city: "Houston",
    population: "2,100,263",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg",
    state: "Texas",
    latitude: 29.7805,
    longitude: -95.3863,
  },
  {
    city: "Phoenix",
    population: "1,445,632",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg",
    state: "Arizona",
    latitude: 33.5722,
    longitude: -112.088,
  },
  {
    city: "Philadelphia",
    population: "1,526,006",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg",
    state: "Pennsylvania",
    latitude: 40.0094,
    longitude: -75.1333,
  },
  {
    city: "San Antonio",
    population: "1,327,407",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG",
    state: "Texas",
    latitude: 29.4724,
    longitude: -98.5251,
  },
  {
    city: "San Diego",
    population: "1,307,402",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg",
    state: "California",
    latitude: 32.8153,
    longitude: -117.135,
  },
  {
    city: "Dallas",
    population: "1,197,816",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg",
    state: "Texas",
    latitude: 32.7757,
    longitude: -96.7967,
  },
  {
    city: "San Jose",
    population: "945,942",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG",
    state: "California",
    latitude: 37.2969,
    longitude: -121.8193,
  },
  {
    city: "Austin",
    population: "790,390",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG",
    state: "Texas",
    latitude: 30.3072,
    longitude: -97.756,
  },
  {
    city: "Jacksonville",
    population: "821,784",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg",
    state: "Florida",
    latitude: 30.337,
    longitude: -81.6613,
  },
  {
    city: "San Francisco",
    population: "805,235",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg",
    state: "California",
    latitude: 37.7751,
    longitude: -122.4193,
  },
  {
    city: "Columbus",
    population: "787,033",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg",
    state: "Ohio",
    latitude: 39.9848,
    longitude: -82.985,
  },
  {
    city: "Indianapolis",
    population: "820,445",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG",
    state: "Indiana",
    latitude: 39.7767,
    longitude: -86.1459,
  },
  {
    city: "Fort Worth",
    population: "741,206",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg",
    state: "Texas",
    latitude: 32.7795,
    longitude: -97.3463,
  },
  {
    city: "Charlotte",
    population: "731,424",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg",
    state: "North Carolina",
    latitude: 35.2087,
    longitude: -80.8307,
  },
  {
    city: "Seattle",
    population: "608,660",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg",
    state: "Washington",
    latitude: 47.6205,
    longitude: -122.3509,
  },
  {
    city: "Denver",
    population: "600,158",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG",
    state: "Colorado",
    latitude: 39.7618,
    longitude: -104.8806,
  },
  {
    city: "El Paso",
    population: "649,121",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg",
    state: "Texas",
    latitude: 31.8484,
    longitude: -106.427,
  },
];

function CommunityMap({showDataList = true,style, width = '98.35vw', height='100vh'}) {
  const [popupInfo, setPopupInfo] = useState(null);
  const navigate = useNavigate();

  const mapRef = useRef(null);

  const onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource('earthquakes');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500
      });
    });
  };

  const onSelectCity = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
            onSelectCity(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const geolocatorRef = useRef(null);

  const [viewPort, setViewPort] = useState(null);

  const [lat, setLat] = useState(searchParams.get("lat") || 37.7577);
  const [lng, setLng] = useState(searchParams.get("lng") || -122.4376);
  const [loc, setLoc] = useState(searchParams.get("loc") || "San Francisco");

  const [useCurrentLocation, setUseCurrentLocation] = useState(true);

  // GET CURRENT LOCATION
  //   useEffect(() => {
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       if (useCurrentLocation) {
  //         setViewPort((prev) => ({
  //           ...viewPort,
  //           latitude: pos.coords.latitude,
  //           longitude: pos.coords.longitude,
  //           zoom: 15,
  //         }));
  //       }
  //     });
  //   }, []);

  useEffect(() => {
    setViewPort((prev) => ({
      ...viewPort,
      latitude: CITIES[0].latitude,
      longitude: CITIES[0].longitude,
      zoom: 5,
    }));
  }, []);

  if (!viewPort) return null;

  return (
    <div className="relative">
     
      <Map
        ref={mapRef}
        mapLib={import("mapbox-gl")}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN}
        initialViewState={viewPort}
        onViewportChange={(viewPort) => {
          setViewPort(viewPort);
          setSearchParams({
            lat: viewPort.latitude,
            lng: viewPort.longitude,
            loc: loc,
          });
        }}
        style={{
          width: width,
          height: height,
        }}
        mapStyle={style || "mapbox://styles/mapbox/dark-v9"}
        interactive="true"
      >
        {showDataList &&  <section className="absolute z-10 flex flex-col gap-2 bg-slate-950/50 w-max top-0 left-0 p-4 m-4 h-[90vh] rounded-lg overflow-auto">
          <button className="p-2 bg-white rounded-md w-max"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >Back</button>
          {
             CITIES.map((city, index) => (
              <div className="input-div">
                <p>{city.latitude} {city.longitude}</p>
                <button className="btn-small" onClick={(e) => {
                   setPopupInfo(city);
                   onSelectCity(city);
                }}>jump</button>
              </div>

            ))
          }
        </section>}
        
        <GeolocateControl position="top-right" />
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />

        {/* <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source> */}

        {pins}
        {popupInfo && (
          <Popup
            className="input-div"
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div className="">
              {popupInfo.city}, {popupInfo.state} |{" "}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
              >
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default memo(CommunityMap);


{/* <button
          onClick={(e) => {
            e.preventDefault();
            const geolocateBtn = document.getElementsByClassName(
              "mapboxgl-ctrl-geolocate"
            );
            geolocateBtn[0].click();
          }}
          className="btn-small absolute top-0 right-0 m-4 z-10 w-max h-max"
        >
          <MdOutlineMyLocation /> Current Location
        </button> */}
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
          ref={geolocatorRef}
          style={{
            display: "none",
          }}
        ></GeolocateControl> */}
