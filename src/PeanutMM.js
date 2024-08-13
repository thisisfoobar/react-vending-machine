import { Link } from "react-router-dom"
import peanutMMPic from "./peanut_mms.jpg"

const PeanutMM = () => {
  return (
    <div>
      <h2>Peant M&M's!</h2>
      <img src={peanutMMPic} />
      <h3><Link to="/">Go Back</Link></h3>
    </div>
  )
}

export default PeanutMM