import Assignments from "./Assignments";

export default {
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul>
                <li v-for="assignment in assignments" :key="assignment.id">
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}