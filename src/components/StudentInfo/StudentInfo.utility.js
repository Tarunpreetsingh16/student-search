
export const calculateAverageGrade = (grades) => {
    const totalGrade = grades.reduce((a, b) => Number(a) + Number(b), 0);
    const average = (totalGrade / grades.length);
    return average;
};