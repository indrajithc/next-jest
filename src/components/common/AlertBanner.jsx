import PropTypes from "prop-types";
import { Alert } from "reactstrap";

export default function AlertBanner(props) {
  const { message, variant } = props;

  return <Alert color={variant}>{message}</Alert>;
}

AlertBanner.defaultProps = {
  message: "An unexpected error occurred. Please try again later.",
  variant: "danger",
};

AlertBanner.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string,
};
