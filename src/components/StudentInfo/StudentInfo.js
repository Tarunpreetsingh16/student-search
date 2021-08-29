import React, {useState} from 'react';
import './StudentInfo.style.css';
import {calculateAverageGrade} from './StudentInfo.utility.js';
import ProfilePicture from './../ProfilePicture/ProfilePicture.js';
import Toggler from './../Toggler/Toggler.js';

const StudentInfo = ({studentInfo}) => {
	const [areGradesVisible, setAreGradesVisible] = useState(false);

	const gradesSection = (
		studentInfo.grades.map((grade, index) => (
			<h4 key={index}>
				Test{index + 1}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grade}%
			</h4>
		))
	);

	const sudentInfoContent = (
		<div className='studentInfoContainer'>
			<h3>{`${studentInfo.firstName} ${studentInfo.lastName}`}</h3>
			<div className='studentInfo'>
				<h4>Email: {studentInfo.email}</h4>
				<h4>Company: {studentInfo.company}</h4>
				<h4>Skill: {studentInfo.skill}</h4>
				<h4>Average: {calculateAverageGrade(studentInfo.grades)}%</h4>
				<div className="gradesContainer">
					{areGradesVisible 
						? gradesSection
						: null
					}
				</div>
			</div>
		</div>
	);

	return (
		<div className='mainContainer'>
			<div className='basicStudentInfoContainer'>
				<ProfilePicture source={studentInfo.pic} alt={'student headshot'} />
				{sudentInfoContent}
				<Toggler visible={areGradesVisible} onToggle={() => setAreGradesVisible(!areGradesVisible)} />
			</div>
		</div>
	);
};

export default StudentInfo;
