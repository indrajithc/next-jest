import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.exportProps = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyApp;
