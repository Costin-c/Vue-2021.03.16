const HelloWorld = `
                    <button @click="count++">点击{{ count }}</button>
                `;

export default{
    data() {
        return {
            count: 0,
        }
    },
    template: HelloWorld
}