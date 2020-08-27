/**
 * @file components/presentationals/TskTask/index.js
 * @name Component/Presentational/TskTask
 * @classdesc Component for TskTask context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskTask />
 */

//#region dependencies
import { Row, Col, Input } from "antd";
import { BorderOutlined } from "@ant-design/icons";
//#endregion
//#region components
//#endregion
//#region styles
//#endregion
/**
 * @function
 * @name TskTask
 * @memberof Component/Presentational/TskTask
 * @description Functional component for layout
 * @return {COMPONENT} task component context
 */
const TskTask = () => {
  return (
    <Row>
      <Col span={4}>
        <BorderOutlined />
      </Col>
      <Col span={14}>
        <BorderOutlined />
      </Col>
    </Row>
  );
};

export default TskTask;
