export default {
    'template': `
    <div class="flex gap-2">
    <!-
        v-on:click=""

        Генерация нового события и передача значения: "$emit('change', tag)
    -->
    <button
        @click ="$emit('change', tag)" 
        v-for="tag in tags" 
        class="border rounded px-1 py- text-sm"
        :class="{
            'border-blue-500 text-blue-500': tag === currentTag
        }"
    >{{ tag }}</button>
</div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },


    computed: {
        // Вычислямое свойство
        tags() {
            // Возвращает новый массив, формирует его с помощью стрелочной функции,
            // которую использует в качестве колбэк-функции в методе map.
            // Колбэк-функция вызывается для каждого элемента массива и
            // из возращаемых значение будет сформирован новый массив.
            // Так как в теле фунции одно выражение, фигурные скобки и return можно опустить,
            // функция неявно вернет результат.  
            // (a) => { return a.tag}
            return ['all', ...new Set(this.initialTags)];
        }
    }
}