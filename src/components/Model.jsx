import React from "react"
import "./Model.css"

export const Model =({onSubmit ,onClick ,onClose, children})=>{
  return <div className="model-container">
    <div className="model">
      <div className="model-header">
        <p className='close'>&times;</p>
      </div>
      <div className="model-content">
        {children}
      </div>
      <div className="model-footer">
        <button className="btn btn-submit" onClick={()=> onSubmit()}>Submit</button>
        <button className="btn btn-cancel" onClick={()=> onCancel()}>Cancel</button>
      </div>
    </div>
  </div>
}
