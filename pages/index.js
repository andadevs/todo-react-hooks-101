/**
 * @name Pages
 * @file index.js
 * @class Base File
 * @classdesc Main app.
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region dependencies
import { Carousel } from "antd";
//#endregion

/**
 * @function
 * @name Main
 * @memberof Pages
 * @type {COMPONENT}
 * @description Main component
 * @return {COMPONENTS} - A components context
 */
export default function Main() {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
