import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="138" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="335" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="35" />
    <rect x="133" y="436" rx="30" ry="30" width="145" height="40" />
  </ContentLoader>
)

export default Skeleton