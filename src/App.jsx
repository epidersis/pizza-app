import { useState } from "react";
import Pizza from "./Pizza";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Pizza />
            <Pizza />
            <Pizza />
        </>
    );
}

export default App;
