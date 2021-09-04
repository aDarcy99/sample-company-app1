import React from 'react';
//components
import Logo from '../components/Logo';
import Button from "../components/common/Button";
import Accordian from '../components/Accordian/Accordian';
import Topics from '../components/Topics/Topics';
import withActiveItem from '../components/withActiveItem';

const accordianData = [
  {
    name: "Lorem Ipsum",
    message:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
  },
  {
    name: "Lorem Ipsum",
    message:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
  },
  {
    name: "Lorem Ipsum",
    message:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
  },
  {
    name: "Lorem Ipsum",
    message:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
  },
  {
    name: "Lorem Ipsum",
    message:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
  },
  {
    name: "Lorem Ipsum",
    message:
      "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
  },
];

//HOCS
const TopicsWithActiveItem = withActiveItem(Topics);
const AccordianWithActiveItem = withActiveItem(Accordian);

const IndexPage = ({...props}) => {
  return (
    <React.Fragment>  
      <TopicsWithActiveItem />
      <AccordianWithActiveItem data={accordianData}/>
    </React.Fragment>
  );
}
 
export default IndexPage;