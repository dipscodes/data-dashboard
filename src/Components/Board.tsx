// @ts-nocheck

import { useEffect, useState } from "react";
import * as d3 from "d3";
import LineChart from "./LineChart";


function convertDateToISOFormat(json: object[], variable: string) {
    const formattedJSON = json.map((entry) => {
        const dateString: string = (entry as any).added;
        var date = new Date(dateString);

        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        var formattedDate = year + "-" + month + "-" + day;
        const value = (entry as any)[variable];
        return {date: new Date(formattedDate), value};
    })
    
    return formattedJSON;
}

interface Props {
    name: string,
    type: string,
    id: string,
}

export default function Board({name, type, id}: Props) {
    useEffect(() => {
        (async () => {
            const url = "http://localhost:5000/getData";
            const apiResponse = await fetch(url);
            const apiResponseInJSON = await apiResponse.json();
            const formattedJSON = convertDateToISOFormat(apiResponseInJSON, "intensity");
            console.log(formattedJSON);
            await LineChart(formattedJSON, {
                x: d => d.date,
                y: d => d.value,
                yLabel: "↑ Daily close ($)",
                width: 1500,
                height: 700,
                color: "blue",
                curve: d3.curveBasis,
                id: id,
            })
        })();
    });
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
        <svg id={id}></svg>
    </div>);
}