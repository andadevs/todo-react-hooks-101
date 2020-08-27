/**
 * @file pages/Slides/Demo/index.js
 * @name Pages/Slides
 * @classdesc Page for Slide Demo
 * @memberof Pages
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <PgDemo />
 */

//#region dependencies
import { useEffect, useState } from "react";
import { Row, Col, List, Input } from "antd";
import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
//#endregion
//#region component
import { TskTitle, TskTask } from "../../../components/presentational";
//#endregion
//#region services
//#endregion

const { Search } = Input;

/**
 * @function
 * @name Task
 * @memberof Pages/Task
 * @description Functional component for Demo
 * @return {COMPONENT} Task component context
 */
const Demo = () => {
  const [allTasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  return (
    <Row className="h--full">
      <Col xs={24} sm={12} className="bckg--color--primary h--full">
        <TskTitle>Case</TskTitle>
        <TskTitle level={5}>
          Construir una vista que tenga un listado de tareas en donde se pueda
        </TskTitle>
        <List>
          <List.Item>
            <span>
              <CheckOutlined />
              Ver el estado de las tareas
            </span>
          </List.Item>
          <List.Item>
            <span>
              <CheckOutlined />
              Establecer las prioridad de las tareas
            </span>
          </List.Item>
        </List>
      </Col>
      <Col xs={24} sm={12}>
        <Row>
          <Col span={24}>
            <Search
              className="input--search--none-icon"
              prefix={<SearchOutlined />}
              enterButton={false}
              bordered={false}
              onSearch={(value) => console.log(value)}
            />
          </Col>
          <Col span={24}>
            <TskTask />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Demo;
