import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList
    },

    template: `
    <assignments-list :assigment="inProgressAssignments" type=""></assignment-list>
    `
};