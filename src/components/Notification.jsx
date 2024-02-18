import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTpes = {
  message: PropTypes.string,
};

export default Notification;
