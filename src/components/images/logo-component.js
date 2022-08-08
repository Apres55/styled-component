import logo from './logo.svg';
import '../../App.css';

const Logo = () => {
    return (
        <div className="logo-div">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Logo;