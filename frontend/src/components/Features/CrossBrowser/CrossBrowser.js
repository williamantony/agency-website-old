import React, { Component } from 'react';
import './CrossBrowser.css';
import MockupBrowser from '../../MockupBrowser/MockupBrowser';
import SectionTitle from '../../SectionTitle/SectionTitle';
import SectionDescription from '../../SectionDescription/SectionDescription';
import PopularBrowsers from './components/PopularBrowsers/PopularBrowsers';
import SectionIcon from '../../SectionIcon/SectionIcon';
import SectionSummary from '../../SectionSummary/SectionSummary';
import CrossBrowserMockup from './components/CrossBrowserMockup/CrossBrowserMockup';

class CrossBrowser extends Component {

  render() {
    return (
      <div className="CrossBrowser">
        <div className="CrossBrowser__bg" />
        {/* <CrossBrowserMockup> */}
          <SectionSummary align="center">
            <SectionIcon icon="cross-browser" />
            <SectionTitle title="Cross Browser" />
            <SectionDescription>
              Browser compatability test is one of the most important step in our development process.
              This ensures that your website will work on all the popular browsers in the same way as expected.  
            </SectionDescription>
            {/* <PopularBrowsers /> */}
          </SectionSummary>
        {/* </CrossBrowserMockup> */}
      </div>
    );
  }

}

export default CrossBrowser;
