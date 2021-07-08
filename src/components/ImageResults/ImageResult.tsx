import React from "react";
import Image from "./Image";
import axios from "axios"

async function getRoverImages(rover : string, cameraType : string) {
    const url = 'http://localhost:8000/rovers/' + rover + '/photos/' + cameraType;
    console.log(url)
    try {
        return await axios.get(url)
    } catch (error) {
        let errorStr: string;
        if (error.response && error.response.data && error.response.data.errors) errorStr = error.response.data.errors;
        else errorStr = error.toString();
        throw {status: error.response.status, message: `Rover Image API error: ${errorStr}`};
    }
}

export default  async function ImageResult() {
    let rover = "curiosity"
    let camera = "fhaz"
    let roverResponse =  getRoverImages(rover, camera)
    return (
        <div className="Image Result">
            These are the Image results
            <Image/>
            <Image/>
            <Image/>
            <Image/>
            <Image/>
        </div>
    )

}