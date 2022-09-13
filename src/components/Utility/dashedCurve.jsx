function DashedCurve(props) {
    
    return(<>
  <svg
    width={964}
    height={463}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 108.1c111.264 5.916 349.61 1.324 375.348-66.782 32.173-85.131-355.24-25.13-122.658 83.929C472.265 227.738 1534.57 172.613 553.968 462"
      stroke="#000"
      strokeOpacity={0.8}
      strokeWidth={2}
      strokeLinecap="round"
      strokeDasharray="10 10"
    />
  </svg>
</>)
}

export default DashedCurve