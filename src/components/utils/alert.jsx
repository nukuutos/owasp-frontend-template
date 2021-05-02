import React, { useEffect, useState } from 'react';
import { deleteAlert } from '../../redux/alert/actions';
import { useSelector, useDispatch } from 'react-redux';

const Alert = () => {
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  const [{ isShow, isHidden }, setState] = useState({ isShow: false, isHidden: true });

  const popUpAnimationDuration = 2000;
  const alertAnimationDuration = 2000;

  const animationDuration = alertAnimationDuration + popUpAnimationDuration;

  useEffect(() => {
    if (alerts.length && isHidden === true) {
      setState({ isHidden: false, isShow: true });

      setTimeout(() => {
        setState((state) => ({ ...state, isShow: false }));
      }, alertAnimationDuration);

      setTimeout(() => {
        setState((state) => ({ ...state, isHidden: true }));
        dispatch(deleteAlert());
      }, animationDuration);
    }

    // without cleanup function!
  }, [alerts.length]);

  // for animation not using {alerts[0] && component}

  // for correct work not using ternary operator
  // className = type === 'success' ? 'alert--success' : 'alert--fail'
  // e.g. success alert, time is up, alert becomes fail (alert does not hidding in time)

  let message, type;
  const alert = alerts[0];
  if (alert) ({ message, type } = alert);

  return (
    <>
      <div className={`alert ${alert && type === 'success' && isShow ? 'alert--show' : ''} alert--success`}>
        {alert && message}
      </div>

      <div className={`alert ${alert && type === 'fail' && isShow ? 'alert--show' : ''} alert--fail`}>
        {alert && message}
      </div>
    </>
  );
};

export default Alert;