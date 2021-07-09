import React, {useState} from "react";
import Photo from "../../api/Photo";
import "./Image.scss"
import Popup from "./Popup";

export default function Image(props: {photo: Photo}) {
    const [popupVisible, setPopupVisible] = useState(false);
    const displayPopup = () => setPopupVisible(true)

    return (
        <div className="Image">
            <div className="imageContainer">
                <img src={props.photo.img_src} onClick={displayPopup}/>
            </div>

            <Popup photo={props.photo} visible={popupVisible} setPopupVisible={setPopupVisible}/>
        </div>
    )
}
