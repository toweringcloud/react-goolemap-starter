import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// 1. 스타일 객체에 대한 타입 정의 (React.CSSProperties)
const containerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
};

// 2. 위도/경도 객체에 대한 타입 정의 (google.maps.LatLngLiteral)
const center: google.maps.LatLngLiteral = {
  lat: 37.5665,
  lng: 126.978,
};

// 3. 지도 옵션 객체에 대한 타입 정의 (google.maps.MapOptions)
const mapOptions: google.maps.MapOptions = {
  mapId: "YOUR_MAP_ID", // Cloud Console에서 생성한 Map ID를 입력하세요.
  disableDefaultUI: true,
  zoomControl: true,
};

// 컴포넌트 타입을 React.FC (Functional Component)로 지정
const MapComponent: React.FC = () => {
  // API 키는 환경 변수로 관리하는 것이 보안상 더 안전합니다.
  const apiKey = process.env.REACT_APP_MAPS_API_KEY!;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        tilt={45}
        heading={90}
        options={mapOptions}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapComponent);
