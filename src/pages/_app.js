import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

// import("../../__mocks__/apiMock").then(({ setupMocks }) => {
//   setupMocks();
// });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.exportProps = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyApp;
