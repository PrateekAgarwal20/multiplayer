import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Title from '../components/Title';
import NotFound from '../components/NotFound';


const AppContainer = ({ name }) => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" render={() => <Title name={name} />}/>
              <Route path="/" component={ NotFound }/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
