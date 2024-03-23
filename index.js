const Notification = (props) => {
  const icon = "icon";
  const { className, children, image } = props;
  return (
    <div className={`message-container ${className}`}>
      <img className={icon} src={image} />
      <p>{`notification-size ${children}`} Message</p>
    </div>
  );
};

const element = (
  <div className="notifications-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications">
      <Notification
        className="notification1"
        children="Information"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="notification2"
        children="Success"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="notification3"
        children="Warning"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="notification4"
        children="Error"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
