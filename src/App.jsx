import React, { useState } from 'react';
import notificationsData from './notifications'; // Import notification data
import './App.css'; // Import the styles

function App() {
  const [notifications, setNotifications] = useState(notificationsData); // Manage notifications state
  const [count, setCount] = useState(0); // Keep the count logic from your original app

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Clear an individual notification
  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src="/react-logo.svg" className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h2>Notifications</h2>
      <p>{notifications.length} notifications</p>

      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id} className="notification">
              <div>
                <strong>{notification.name}</strong>: {notification.message}
              </div>
              <button onClick={() => clearNotification(notification.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}

      {notifications.length > 0 && (
        <button onClick={clearAllNotifications}>Clear All</button>
      )}
    </div>
  );
}

export default App;