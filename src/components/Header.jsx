import Untitled from "/public/Untitled.png"
import "../App.css";
export default function Header() {
    return (
      <>
        <header style={{display:'flex',justifyContent:"space-around",width:'400px'}}>
          <img src={Untitled}></img>
          <div style={{marginTop:'40px',fontSize:'30px',marginRight:'30px'}}>Ready To Go</div>
        </header>
        
      </>
    );
  }