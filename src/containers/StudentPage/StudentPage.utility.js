export const filterStudents = (students, filters) => {
    let filteredStudents = [...students];
    if (filters.name.length > 0) {
        filteredStudents = filterByName(filteredStudents, filters.name);
    }
    if (filters.tag.length > 0) {
        filteredStudents = filterByTag(filteredStudents, filters.tag);
    }
    return filteredStudents;
};

const filterByName = (students, nameSearchQuery) => {
    return students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return fullName.toLowerCase().indexOf(nameSearchQuery.toLowerCase()) !== -1;
    })
};

const filterByTag = (students, tagSearchQuery) => {
    return students.filter((student) => {
        return student.tags !== undefined
    })
    .filter((student) => {
        return doesTagExist(student.tags, tagSearchQuery);
    });
};

const doesTagExist = (tags, tagSearchQuery) => {
    return tags.some((tag) => tag.toLowerCase().indexOf(tagSearchQuery.toLowerCase()) !== -1)
};
