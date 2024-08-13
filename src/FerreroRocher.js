import { Link } from "react-router-dom"
import ferreroRocherPic from "./ferrero_rocher.jpg"

const FerreroRocher = () => {

  return (
    <div>
      <h2>Ferrero Rocher!</h2>
      <img src={ferreroRocherPic} />
      <h3><Link to="/">Go Back</Link></h3>
    </div>
  )
}

export default FerreroRocher