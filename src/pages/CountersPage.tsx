import React, {useEffect} from "react";
import ButtonCounterV1 from "../components/ButtonCounterV1";
import ButtonCounterV2 from "../components/ButtonCounterV2/ButtonCounterV2";

export default function CountersPage() {
    useEffect(() => {
        document.title = "Button Click Counters";
    });

    return <div>
        <ButtonCounterV1 />

        <ButtonCounterV2 />
    </div>;
}
