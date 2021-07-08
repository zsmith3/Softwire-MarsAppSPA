import React, {useEffect, useState} from "react";
import Select from "react-select";
import {getRovers} from "../../api";
import "./RoverForm.scss";

export default function RoverForm() {
    const [rovers, setRovers] = useState<any[]>([]);
    const [currentRover, setCurrentRover] = useState<{ value: string; label: string } | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getRovers().then(rovers => setRovers(rovers)).catch(error => setError(error.toString()));
    }, []);

    return <div className="rover-form">
        <Select options={rovers.map(rover => ({value: rover.name.toLowerCase(), label: rover.name}))}
                onChange={option => setCurrentRover(option)}/>
        <br/>
        <span>{error}</span>
        <span>Current rover: {currentRover ? currentRover.label : null}</span>
    </div>;
}
