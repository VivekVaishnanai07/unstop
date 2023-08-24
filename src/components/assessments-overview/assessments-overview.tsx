import Divider from '@mui/material/Divider';
import { useState } from 'react';
import CandidatesIcon from "../../assets/icon/candidates-Icon";
import PurposeIcon from "../../assets/icon/purpose-icon";
import SourceIcon from "../../assets/icon/source-icon";
import ViewAgenda from "../../assets/icon/view-agenda";
import MyAssessment from '../my-assessment/my-assessment';
import "./assessments-overview.css";

const AssessmentsOverview = () => {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="assessment-overview-section">
      <div className={`smooth-div ${showDiv ? 'visible' : ''}`}>
        <div className="container">
          <div className="header-title hide-div">Assessments Overview</div>
          <div className="main-section">
            <div className="total-assessment-section">
              <div className='assessment-overview-title'>Total Assessment</div>
              <div className="content">
                <div className="icon-box"><ViewAgenda className="icon" /></div>
                <div className="title-text">34</div>
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="candidates-section">
              <div className='assessment-overview-title'>Candidates</div>
              <div className='content'>
                <div><CandidatesIcon className="icon-box" /></div>
                <div className='overview-box'>
                  <div className='amount-box'>
                    <div className='amount-number'>11,145</div>
                    <span className='extra-amount-number'>+89</span>
                  </div>
                  <div className='amount-text'>Total Candidate</div>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className='overview-box'>
                  <div className='amount-box'>
                    <div className='amount-number'>1,14</div>
                    <span className='extra-amount-number'>+89</span>
                  </div>
                  <div className='amount-text'>Who Attamped</div>
                </div>
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="candidates-source-section">
              <div className='assessment-overview-title'>Candidates Source</div>
              <div className='content'>
                <div className='icon-box'><SourceIcon /></div>
                <div className='overview-box'>
                  <div className='amount-box'>
                    <div className='amount-number'>11,000</div>
                    <span className='extra-amount-number'>+89</span>
                  </div>
                  <div className='amount-text'>E-mail</div>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className='overview-box'>
                  <div className='amount-box'>
                    <div className='amount-number'>145</div>
                    <span className='extra-amount-number'>+89</span>
                  </div>
                  <div className='amount-text'>Social Share</div>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className='overview-box'>
                  <div className='amount-box'>
                    <div className='amount-number'>145</div>
                    <span className='extra-amount-number'>+89</span>
                  </div>
                  <div className='amount-text'>Unique Link</div>
                </div>
              </div>
            </div>
            <Divider className='hide-div' orientation="vertical" flexItem />
            <div className="total-purpose-section">
              <div className='assessment-overview-title'>Total Purpose</div>
              <div className='content'>
                <div className='icon-box'><PurposeIcon /></div>
                <div className='title-text'>11</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyAssessment showDiv={showDiv} toggleDiv={toggleDiv} />
    </div>
  )
}

export default AssessmentsOverview;