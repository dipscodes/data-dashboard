import Board from "./Board";

export default function Page() {
    return <div className="flex flex-wrap h-screen justify-center">
    <Board name="hello" type="graph"></Board>
    <Board name="world" type="pie"></Board>
    <Board name="pie" type="pie"></Board>
    <Board name="graph" type="graph"></Board>
    </div>;
}