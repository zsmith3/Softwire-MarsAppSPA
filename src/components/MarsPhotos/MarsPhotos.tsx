import RoverForm from "./RoverForm";
import {useEffect} from "react";

export default function MarsPhotos() {
    useEffect(() => {
        document.title = "Mars Photos";
    }, []);

    return <RoverForm />;
}
