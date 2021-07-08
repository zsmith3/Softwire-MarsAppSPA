import React, {useEffect, useState} from "react";
import Select from "react-select";
import {getRovers} from "../../api/api";
import "./RoverForm.scss";
import Rover from "../../api/Rover";
import Camera from "../../api/Camera";

interface OptionObject {
    value: string;
    label: string;
}

type Option = OptionObject | null;

export default function RoverForm(props: {onSubmit: (roverName: string, cameraName: string) => void}) {
    const [rovers, setRovers] = useState<Rover[]>([]);
    const [currentRover, setCurrentRover] = useState<Rover | null>(null);
    const [currentCamera, setCurrentCamera] = useState<Camera | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getRovers().then(rovers => setRovers(rovers)).catch(error => setError(error.toString()));
    }, []);

    function updateRover(option: Option) {
        setCurrentRover(option ? (rovers.find(rover => rover.name === option.value) || null) : null);
        setCurrentCamera(null);
    }

    function updateCamera(option: Option) {
        setCurrentCamera((option && currentRover) ? (currentRover.cameras.find(camera => camera.name === option.value) || null) : null)
    }

    const cameraOptions = currentRover ? currentRover.cameras.map(camera => ({
        value: camera.name,
        label: camera.full_name
    })) : [];

    return <div className="rover-form">
        <Select options={rovers.map(rover => ({value: rover.name, label: rover.name}))}
                onChange={option => updateRover(option)} isLoading={!rovers.length}/>
        <br/>
        <Select options={cameraOptions} onChange={option => updateCamera(option)}/>
        <br />
        <span>{error}</span>
        <br />
        <button disabled={!(currentRover && currentCamera)} onClick={() => currentRover && currentCamera && props.onSubmit(currentRover.name, currentCamera.name)}>Submit</button>
    </div>;
}
