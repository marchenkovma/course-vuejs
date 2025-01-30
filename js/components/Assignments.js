import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList
    },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },

            ]
        }
    },

    // Вычисляемые свойства
    computed: {
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete);
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete);
        }
    }
};