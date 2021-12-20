import './App.css';
import SvgLogo from './TreeElements/SvgLogo';
import SvgStar from './TreeElements/SvgStar';
import SvgTree from './TreeElements/SvgTree';
import SvgText from "./TreeElements/SvgText";


function App() {
    return (
            <svg className="App">
                <SvgLogo/>
                <SvgStar/>
                <SvgTree/>
                <SvgText/>
            </svg>
    );
}

export default App;
