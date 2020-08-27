/**
 * @name Pages
 * @file index.js
 * @class Base File
 * @classdesc Main app.
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region dependencies
import { Carousel, Typography } from "antd";
//#endregion
//#region components
import { PgDemo } from "../pages/Slides";
//#endregion

const { Title } = Typography;

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
    <Carousel className afterChange={onChange}>
      <PgDemo />
      <div>
        <Title>First Slide</Title>
      </div>
      <div>
        <Title>Second Slide - Intro - Imperative</Title>
      </div>
      <div>
        <Title>Third Slide - Intro - Functional</Title>
      </div>
      <div>
        <Title>Fourth Slide - Context</Title>
      </div>
    </Carousel>
  );
}
