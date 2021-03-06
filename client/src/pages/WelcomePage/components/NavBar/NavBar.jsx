import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import WelcomePage from '../../WelcomePage';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import '../../WelcomePage.css';
import ForgotPassword from '../../../ForgotPassword/ForgotPassword';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };
  componentDidMount() {
    console.log('navbar', this.props.updateState);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Snack Time" />
            <Tab label="Parent Login" />
            <Tab label="Admin Login" />
            <Tab label="Forgot Password" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <WelcomePage />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Login updateState={this.props.updateState} type="Parent" />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Login updateState={this.props.updateState} type="Staff" />
            <SignUp />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <ForgotPassword />
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
