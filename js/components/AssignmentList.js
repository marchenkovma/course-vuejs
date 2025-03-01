import Assignment from './Assignment';
import AssignmentTags from './AssingmentTags';

export default {
    components: { Assignment, AssignmentTags },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        // Вычислямое свойство
        tags() {
            // Возвращает новый массив, формирует его с помощью стрелочной функции,
            // которую использует в качестве колбэк-функции в методе map.
            // Колбэк-функция вызывается для каждого элемента массива и
            // из возращаемых значение будет сформирован новый массив.
            // Так как в теле фунции одно выражение, фигурные скобки и return можно опустить,
            // функция неявно вернет результат.  
            // (a) => { return a.tag}
            return ['all', ...new Set(this.assignments.map((a) => a.tag))];
        }
    }
}