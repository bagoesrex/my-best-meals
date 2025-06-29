export default function HeaderBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-45 -z-10 overflow-hidden -scale-x-100">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ff5500"
          fillOpacity="1"
          d="M0,128L34.3,133.3C68.6,139,137,149,206,154.7C274.3,160,343,160,411,138.7C480,117,549,75,617,90.7C685.7,107,754,181,823,218.7C891.4,256,960,256,1029,234.7C1097.1,213,1166,171,1234,160C1302.9,149,1371,171,1406,181.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        />
      </svg>
    </div>
  );
}
