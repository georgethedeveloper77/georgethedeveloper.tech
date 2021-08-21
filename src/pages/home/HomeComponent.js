import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    LogRocket.init("3m4hsk/georgethedevelopertech");
    // after calling LogRocket.init()
    setupLogRocketReact(LogRocket);

    LogRocket.getSessionURL(function (sessionURL) {
      ga("send", {
        hitType: "event",
        eventCategory: "LogRocket",
        eventAction: sessionURL,
      });
    });

    LogRocket.getSessionURL(function (sessionURL) {
      mixpanel.track("LogRocket", { sessionURL: sessionURL });
    });
    // This is an example script - don't forget to change it!
    LogRocket.identify("THE_USER_ID_IN_YOUR_APP", {
      name: "George Karani",
      email: "georgekarani77@gmail.com",

      // Add your own custom user variables here, ie:
      subscriptionType: "pro",
    });
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
