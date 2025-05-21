import { useRef, useState, useEffect } from "react";
testDeployment
import "./App.css";
import QRCodeStyling from "qr-code-styling";
import myimg from "./assets/11.png";
const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: myimg,
  dotsOptions: {
    color: "black",
    type: "rounded",
  },
  imageOptions: {
    margin: 5,
  },
});
function App() {
  const [txt, setTxt] = useState("");
  const [mycolor, setColor] = useState("black");
  const ref = useRef(null);
  const inputref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  const qrUpdate = () => {
    qrCode.update({
      data: txt,
      dotsOptions: {
        color: mycolor,
      },
    });
  };
  useEffect(() => {
    qrUpdate();
  }, [txt]);

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="Montserrat">Qr Code Generator</h1>
        <p>
          {" "}
          choose the color
          <input
            type="color"
            className="Montserrat"
            style={{ width: "20px", margin: "0 10px" }}
            onChange={(e) => {
              setColor(e.target.value);
              qrUpdate();
            }}
          />
        </p>
        <input
          type="text"
          className="Montserrat"
          style={{
            fontSize: "20px",
            width: "70%",
            margin: "10px 0",
          }}
          placeholder="write text"
          onChange={(e) => {
            setTxt(e.target.value);
          }}
          ref={inputref}
        />

        
      </div>
      <section className="component-show">
        {/* <QRCode value={`${txt}`} bgColor="white" fgColor="black" /> */}
        <div ref={ref} />
        {txt === "" || txt === null ? (
          ""
        ) : (
          <button
            type="button"
            style={{
              backgroundColor: "green",
              fontSize: "20px",
              padding: "5px 10px",
              border: "none",
              borderRadius: "10px",
              color: "white",
              marginTop: "20px",
            }}
            onClick={() => {
              qrCode.download({ extension: "png" });
            }}
          >
            donwload
          </button>
        )}
      </section>
    </div>
  );
}

export default App;
