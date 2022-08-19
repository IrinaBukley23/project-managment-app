import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers/layout/Layout';
import Welcome from './pages/welcome/Welcome';
import Main from './pages/main/Main';
import Board from './pages/board/Board';
import Footer from './containers/footer/Footer';
import NotFound from './pages/notFound/NotFound';
import AuthPage from './pages/authPage/AuthPage';
import './main.css';
import ProtectedRoute from './containers/protectedRoute/ProtectedRoute';
import EditProfile from './pages/editProfile/EditProfile';
import Header from './containers/header/Header';
import LoginPage from './pages/loginPage/LoginPage';
import { TaskPage } from './pages/taskPage/TaskPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<Header />}>
                <Route path="board" element={<Board />} />
                <Route path="/:id" element={<TaskPage />} />
                <Route path="edit" element={<EditProfile />} />
                <Route path="main" element={<Main />} />
              </Route>
            </Route>
            <Route path="auth" element={<AuthPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="notFound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
