import React, {useEffect, useState} from "react";
import Select from "react-select";
import {getRovers} from "../../api/api";
import "./RoverForm.scss";
import Rover from "../../api/Rover";
import Camera from "../../api/Camera";
import DateInput from "./DateInput";
import {DateType, DateValue} from "../../api/EarthDate";

interface OptionObject {
    value: string;
    label: string;
}

type Option = OptionObject | null;

export default function RoverForm(props: { onSubmit: (roverName: string, cameraName: string, dateType: DateType, date: DateValue) => void }) {
    const [rovers, setRovers] = useState<Rover[]>([]);
    const [currentRover, setCurrentRover] = useState<Rover | null>(null);
    const [currentCamera, setCurrentCamera] = useState<Camera | null>(null);
    const [dateType, setDateType] = useState<DateType>("sol");
    const [date, setDate] = useState<DateValue>(1000);
    const [error, setError] = useState("");

    useEffect(() => {
        getRovers().then(rovers => setRovers(rovers)).catch(error => setError(error.toString()));
    }, []);

    function updateRover(option: Option) {
        setCurrentRover(option ? (rovers.find(rover => rover.name === option.value) || null) : null);
        setCurrentCamera(null);
    }

    function updateCamera(option: Option) {
        setCurrentCamera(option && (currentRover?.cameras.find(camera => camera.name === option.value) || null))
    }

    function updateDate(dateType: DateType, date: DateValue) {
        setDateType(dateType);
        setDate(date);
    }

    const cameraOptions = currentRover?.cameras.map(camera => ({
        value: camera.name,
        label: camera.full_name
    }));

    return <form className="rover-form" action="">
        <Select options={rovers.map(rover => ({value: rover.name, label: rover.name}))}
                onChange={option => updateRover(option)} isLoading={!rovers.length}/>
        <br/>
        <Select options={cameraOptions} onChange={option => updateCamera(option)}/>
        <br/>
        <DateInput onChange={(dateType, date) => updateDate(dateType, date)} maxSol={currentRover?.max_sol} minDate={currentRover?.landing_date} maxDate={currentRover?.max_date} />
        <p>{error}</p>
        <button className="button" disabled={!(currentRover && currentCamera && dateType)}
                onClick={event => currentRover && currentCamera && props.onSubmit(currentRover.name, currentCamera.name, dateType, date) && event.preventDefault()}>Submit
        </button>
    </form>;
}
