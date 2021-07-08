import React, {useState} from "react";
import ImageResult from "./ImageResult";
import Photo from "../../dataClasses/Photo";
import Rover from "../../dataClasses/Rover";
import Camera from "../../dataClasses/Camera";

export default function ImagePage() {
    const [roverResponse, setRoverResponse] = useState(fakePhotoList)


    return (
        <ImageResult PhotoList={roverResponse}/>
    )
}

// Dummy Data for image results page
const fakeRover = new Rover({"id": 5, "name": "Curiosity"})
const fakeCamera = new Camera({"id": 26, "name": "NAVCAM"})
const fakePhotoList: Photo[] = [
    new Photo({
        id: 103389,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486264973EDR_S0481570NCAM00546M_.JPG",
        rover: fakeRover,
        camera: fakeCamera
    }), new Photo({
        id: 103383,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486272784EDR_F0481570NCAM00415M_.JPG",
        rover: fakeRover,
        camera: fakeCamera
    }), new Photo({
        id: 103384,
        img_src: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486271176EDR_F0481570NCAM00322M_.JPG",
        rover: fakeRover,
        camera: fakeCamera
    }), new Photo({
        id: 103385,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486270860EDR_F0481570NCAM00323M_.JPG",
        rover: fakeRover,
        camera: fakeCamera
    }), new Photo({
        id: 103386,
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486265192EDR_S0481570NCAM00546M_.JPG",
        rover: fakeRover,
        camera: fakeCamera
    })
]