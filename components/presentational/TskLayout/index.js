/**
 * @file components/presentationals/TskLayout/index.js
 * @name Component/Presentational/TskLayout
 * @classdesc Component for Layout context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskLayout />
 */

//#region dependencies
import Head from "next/head";
import { Layout } from "antd";
//#endregion
//#region components
//#endregion
//#region styles
//#endregion

const { Content } = Layout;

/**
 * @function
 * @name TskLayout
 * @memberof Component/Presentational/TskLayout
 * @description Functional component for layout
 * @param {OBJECT} children Context for each partial view
 * @return {COMPONENT} layout component context
 */
const TskLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Workshop-RH-101</title>
        <link rel="icon" href="/avatar.png" />
      </Head>

      <Layout>
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default TskLayout;
