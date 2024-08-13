import { Link } from "react-router-dom"
import nerdGummyPic from "./nerd_gummy_clusters.jpg"

const NerdGummyCluster = () => {

  return (
    <div>
      <h2>Nerd Gummy Clusters!</h2>
      <img src={nerdGummyPic} />
      <h3><Link to="/">Go Back</Link></h3>
    </div>
  )
}

export default NerdGummyCluster