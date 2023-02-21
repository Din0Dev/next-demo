import EachTodo from 'components/EachTodo';
import useGetListTodos from 'hooks/todos/useGetListTodos';
import { useAuthentication } from 'providers/AuthenticationProvider';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = (props) => {
  const { t } = useTranslation();
  //! Render
  return (
    <div>
      <h3>{t('message:hello')}</h3>
      <iframe title='Frame' style={{width: '100vw', height: '100vh' }} src="https://www.spatial.io/s/NEC-BDD-1-to-1-Meeting-63ec53b91376a3a005a8ba38?share=8948596490367497350" allow="microphone https://spatial.io; camera https://spatial.io"></iframe>
    </div>
  );
};
export default HomePage;
