import React from 'react';
import Confirm from './Users/confirmation-1152155_640.jpg'

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src={Confirm} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};


