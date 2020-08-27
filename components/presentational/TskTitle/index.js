/**
 * @file components/presentationals/TskTitle/index.js
 * @name Component/Presentational/TskTitle
 * @classdesc Component for Title context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskTitle />
 */

//#region dependencies
import { Typography } from "antd";
//#endregion
//#region components
//#endregion
//#region styles
//#endregion

const { Title } = Typography;

/**
 * @function
 * @name TskTitle
 * @memberof Component/Presentational/TskTitle
 * @description Functional component for title
 * @param {OBJECT} children Context for each partial view
 * @return {COMPONENT} layout component context
 */
const TskTitle = ({ children, level }) => {
  return <Title level={level || 1}>{children}</Title>;
};

export default TskTitle;
