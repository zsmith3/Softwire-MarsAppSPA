import React from "react";
import Photo from "../../api/Photo";
import "./Popup.scss"

export default function Popup(props: { photo: Photo, visible: boolean, setPopupVisible: any}) {
    const closePopup = () => {props.setPopupVisible(false)}

    return (
        <div>
            {props.visible && <div className="popup">
                <span className="close" onClick={closePopup}>x</span>
                <img className="popup-content" src={props.photo.img_src}/>
                <div id="caption">This was taken on: {props.photo.earth_date.toString()}</div>
            </div>}
        </div>
    )
}