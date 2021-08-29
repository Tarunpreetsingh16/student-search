import React, {useState, useEffect} from 'react';
import {getStudents} from '../../api/students';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import StudentInfo from '../../components/StudentInfo/StudentInfo.js';
import './StudentsPage.style.css';
import {filterStudents} from './StudentPage.utility.js';
import TagInputDisplay from './../../components/TagInputDisplay/TagInputDisplay.js'
const StudentsPage = () => {

	const [students, setStudents] = useState([]);
	const [filters, setFilters] = useState({
		name: '',
		tag: '',
	});
	const [filteredStudents, setFilteredStudents] = useState([]);

	useEffect(() => {
		const getStudentsData = async () => {
			const responseData = await getStudents();
			const students = responseData.students;
			setStudents(students);
		};
		getStudentsData();
	}, []);
	
	useEffect(() => {
		const filteredStudents = filterStudents(students, filters);
		setFilteredStudents(filteredStudents);
	}, [filters, students]);

	const updateStudentStateWithTag = (id, tag) => {
		if (tag && tag.trim().length > 0) {
			let studentsCopy = addTagToStudent(id, tag);
			setStudents(studentsCopy);
		}
	};

	const addTagToStudent = (id, tag) => {
		let studentsCopy = [...students];
		studentsCopy = studentsCopy.map((student) => {
			if (student.id === id) {
				if (!student.tags) {
					student.tags = [];
				};
				student.tags.push(tag);
			}
			return student;
		});
		return studentsCopy;
	} 

	return (
		<>
			<div className='searchBoxContainer'>
				<CustomTextInput placeholder={'Search by name'} onInputChange={(searchQuery) => setFilters({...filters, name: searchQuery})}/>
			</div>
			<div className='searchBoxContainer'>
				<CustomTextInput placeholder={'Search by tag'} onInputChange={(searchQuery) => setFilters({...filters, tag: searchQuery})}/>
			</div>
			{
				filteredStudents.map((student) => {
					return (
						<div className='studentContainer' key={student.id}>
							<StudentInfo studentInfo={student}/>
							<div className='tagInputDisplayContainer'>
								<TagInputDisplay
									tagsToDisplay={student.tags}
									propsForTextInput={{
										placeholder: 'Add a tag',
										onEnterPress: (tag) => updateStudentStateWithTag(student.id, tag),
									}} 
								/>
							</div>
						</div>
					);
				})
			}
		</>
	);
};

export default StudentsPage;
