import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { appendClassNameModifier, combineClassNames } from '../../helpers/helpers';
import { RootComponentProps } from './types';
import { HomeComponent } from '../HomeComponent/HomeComponent';

export default function RootComponent(
  { isModalOpen }: RootComponentProps
) {

  const className = 'root';
  const modifier = isModalOpen ? 'blur' : '';

  const combinedClassNames = combineClassNames(className,
    appendClassNameModifier(className, modifier)
  );

  return (
    <>
      <div className={ combinedClassNames }>
        <Router>
          <Switch>
            <Route path="/" component={ HomeComponent } exact={ true }/>
          </Switch>
        </Router>
      </div>
      <div id="modal-root"/>
    </>
  );
}
