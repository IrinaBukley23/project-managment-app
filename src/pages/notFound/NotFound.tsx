import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  const linkStyle = {
    textDecoration: 'none',
    fontSize: 30,
  };
  const titleStyle = {
    margin: 200,
    fontSize: 50,
    color: 'red',
  };
  return (
    <div>
      <Link style={linkStyle} to={'/'}>
        {t('NotFound.linkWelcome')}
      </Link>
      <div style={titleStyle}>{t('NotFound.title')}</div>
    </div>
  );
};

export default NotFound;
