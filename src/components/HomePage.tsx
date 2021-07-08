import React, {useEffect} from "react";

export default function HomePage() {
    useEffect(() => {
        document.title = "Home";
    });

    return <div>
        <h2>Home</h2>
        <p>This is the home page</p>
    </div>;
}
