import { useState } from "react";

interface Props {
    name: string,
    type: string,
}

export default function Board({name, type}: Props) {
    const box = {
        "graph": {
            width: "w-[80%]",
            height: "h-[40%]",
        },
        "pie": {
            width: "w-[40%]",
            height: "h-[40%]",
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [boxData, setBoxdata] = useState(box);
    
    return (<div className={`${(boxData as any)[type].width} ${(boxData as any)[type].height} border-[rgba(47, 43, 61, 0.16)] border-solid border-2 rounded-md m-4`}>
        {name}
    </div>);
}