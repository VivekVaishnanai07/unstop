import { Divider, Grid } from "@mui/material";
import { useState } from "react";
import AddIcon from "../../assets/icon/add";
import BagIcon from "../../assets/icon/bag-icon";
import BarChart from "../../assets/icon/bar-chart";
import CalenderIcon from "../../assets/icon/calendar-icon";
import ClockIcon from "../../assets/icon/clock-icon";
import FilterListAlt from "../../assets/icon/filter-list-alt";
import LinkIcon from "../../assets/icon/link";
import SearchIcon from "../../assets/icon/search";
import ThreeDotIcon from "../../assets/icon/three-dot-icon";
import { assessmentList } from "../../utils/util";
import NewAssessmentDialog from "../new-assessment-dialog/new-assessment-dialog";
import "./my-assessment.css";

const MyAssessment = ({ showDiv, toggleDiv }: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className='my-assessment-section'>
        <div className='my-assessment-title'>My Assessment</div>
        <div className='icon-section'>
          <div className='search-icon'>
            <SearchIcon className='icon' />
          </div>
          <div className='filter-list-alt-icon'>
            <FilterListAlt className='icon' />
          </div>
          <div className={showDiv ? 'bar-chart-icon-box active-icon' : 'bar-chart-icon-box'} onClick={toggleDiv}>
            <div className='bar-chart-icon'>
              <BarChart className='icon' color={showDiv ? "#0073E6" : "#1C4980"} />
            </div>
          </div>
        </div>
      </div>

      <div className='assessment-section'>
        <div className='assessment-list'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className='new-assessment-box'>
                <div className='add-assessment-box'>
                  <div className='add-assessment-icon' onClick={handleClickOpen}><AddIcon className="icon" /></div>
                  <div className='add-new-assessment'>New Assessment</div>
                </div>
                <div className='dec'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
              </div>
            </Grid>
            {
              assessmentList.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index + 1}>
                  <div className='assessment-box'>
                    <div className='assessment-box-details'>
                      <div className='description-box'>
                        <BagIcon className='bag-icon' />
                        <div className='dec'>
                          <div className='title'>{data.title}</div>
                          <div className='profession'>
                            <div className='profession-type'>{data.profession_type}</div>
                            <Divider orientation="vertical" flexItem />
                            <div className='profession-details'>
                              <div className='calender-icon'>
                                <CalenderIcon className='icon hide-icon' />
                                <ClockIcon className='icon clock-icon' />
                              </div>
                              <div className='date'>{data.date}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='dot-icon'>
                        <div><ThreeDotIcon className='icon' /></div>
                      </div>
                    </div>
                    <div className="divider" />
                    <div className='duration-details'>
                      <div className='duration-section'>
                        <div className='time-section'>
                          <div className='number'>{data.duration_time}</div>
                          <div className='dec'>Duration</div>
                        </div>
                        <div className='time-section'>
                          <div className='number'>{data.questions_number}</div>
                          <div className='dec'>Questions</div>
                        </div>
                      </div>
                      <div className='share-assessment'>
                        <div className='share-section'>
                          <LinkIcon className='link-icon' />
                          <div className='dec'>Share</div>
                        </div>
                        <div className='profile-section'>
                          {
                            data.profile_name.length > 1 ? (
                              <div className="profiles">
                                <div className='profile-bg1'>
                                  <div className='dec1'>LP</div>
                                </div>
                                <div className='profile-bg2'>
                                  <div className='dec2'>LP</div>
                                </div>
                                <div className='profile-bg3'>
                                  <div className='dec3'>LP</div>
                                </div>
                              </div>
                            ) : (
                              <div className='profile-bg'>
                                <div className='dec'>LP</div>
                              </div>
                            )
                          }
                          <div className="total-profile">{data.total_profile && `+${data.total_profile}`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
      <NewAssessmentDialog open={open} setOpen={setOpen} />
    </>
  )
}

export default MyAssessment;