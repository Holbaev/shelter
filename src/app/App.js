import styles from './app.module.scss'
import { Routes , Route } from 'react-router-dom';
import  routes  from '../shared/routes/routes';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className={styles.app}>
     <Routes>
        {routes?.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
