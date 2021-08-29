/**
* @file contains API calls related to students
*/

import {instance} from "../axiosSetup";

/**
 * @function
 * @description used to fetch data about all the students
 * @returns {Array} students data
 */
export const getStudents = async () => {
    try {
        const response = await instance.get(
            'https://api.hatchways.io/assessment/students',
        );
        return response.data;
    } catch(error) {
        throw error;
    }
};
