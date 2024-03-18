import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from "js-cookie";

import { ConfigProvider } from 'antd';
import { IntlProvider } from "react-intl";

import AppLocale from './languages';

import Router from "./router/Router";
import SignUp from '../src/view/pages/authentication/register/index';

export default function App() {
  // Redux
  const customise = useSelector(state => state.customise)

  // Lang
  const currentAppLocale = AppLocale[customise.language];

  useEffect(() => {
    document.querySelector("html").setAttribute("lang", customise.language);
  }, [customise]);

  return (
    <ConfigProvider locale={currentAppLocale.antd} direction={customise.direction}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <Router />
      </IntlProvider>
    </ConfigProvider>
  );
}