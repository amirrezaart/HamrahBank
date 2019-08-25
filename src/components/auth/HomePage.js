import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const styles = {
  tabs: {
    background: "#fff",
    alignment: ""
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

class DemoTabs extends React.Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs
          value={index}
          fullWidth
          onChange={this.handleChange}
          style={styles.tabs}
        >
          <Tab label="خدمات سپرده" />
          <Tab label="خدمات تسهیلات" />
          <Tab label="خدمات کارت" />
        </Tabs>
        <SwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          animateHeight="true"
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            خدمات سپرده
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            خدمات تسهیلات
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            خدمات کارت
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default DemoTabs;
