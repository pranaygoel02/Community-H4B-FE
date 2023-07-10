import { useState, memo, useMemo, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
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

function CommunityMap({showDataList = true,style, width = '98.35vw', height='100vh', communities}) {

  console.log(communities, 'in map');

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

  const onSelectCommunity = useCallback(({ location }) => {
    mapRef.current?.flyTo({ center: [parseFloat(location[1]), parseFloat(location[0])], duration: 2000 });
  }, []);

  const pins = useMemo(
    () =>
      communities && communities.map((community, index) => {console.log(community,'in pins') ; return (
        <Marker
          key={`marker-${index}`}
          longitude={parseFloat(community.location[1])}
          latitude={parseFloat(community.location[0])}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(community);
            onSelectCommunity(community);
          }}
        >
          <Pin />
        </Marker>
      )}),
    [communities]
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const geolocatorRef = useRef(null);

  const [viewPort, setViewPort] = useState(null);


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
      latitude: communities[0]?.location[0],
      longitude: communities[0]?.location[1],
      zoom: 5,
    }));
  }, [communities]);

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
          // setSearchParams({
          //   lat: viewPort.latitude,
          //   lng: viewPort.longitude,
          //   loc: loc,
          // });
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
            longitude={parseFloat(popupInfo?.location[0])}
            latitude={parseFloat(popupInfo?.location[1])}
            onClose={() => setPopupInfo(null)}
          >
            <div className="">
              {popupInfo.name}, {popupInfo.state} |{" "}
              <Link className="btn-small" href={`/community/${popupInfo?._id}`}>View</Link>
            </div>
            <img width="100%" src={popupInfo?.image} />
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
