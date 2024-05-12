import { Chessboard } from "react-chessboard";
import "./App.css";
function App() {
    return (
        <div className="chessboard-container">
            <Chessboard position={"start"} boardWidth={600} />
        </div>
    );
}

export default App;




