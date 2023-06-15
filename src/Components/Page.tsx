import Board from "./Board";

export default function Page() {
    return (<div className="flex flex-wrap h-screen justify-center">
        <Board name="hello" type="graph" id="linechart"></Board>
    </div>);
}