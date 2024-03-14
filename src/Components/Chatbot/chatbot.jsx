import React from 'react';
import scriptLoader from 'react-script-loader-hoc';

class DialogflowChat extends React.Component {
  render() {
    return <df-messenger
      location="europe-west2"
      project-id="phrasal-league-417212"
      agent-id="c5bfdc6f-889d-4e3f-9ff7-64b430584bea"
      language-code="en"
      max-query-length="-1"
    ></df-messenger>;
  }
}

export default scriptLoader('https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js')(DialogflowChat);
