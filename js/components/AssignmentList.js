import Assigments from "./Assigments";

export default {
    template: `
            <section v-show="assigmnets.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul>
                <li v-for="assigment in in assigmnets" :key="assigment.id">
                    <label>
                        {{ assigment.name }}
                        <input type="checkbox" v-model="assigment.complete">
                    </label>
                </li>
            </ul>
        </section>
    `,

    props: {
        Assigments: {
            type: Array,
            title: 'Test',
        }
    }
}