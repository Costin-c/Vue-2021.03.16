import HelloWorld from './components/HelloWorld.js'

const template =  `
                    <div>
                        <h1>Hello World!!</h1>
                        <HelloWorld />
                    </div>
       
    `;

export default{
    components:{
        HelloWorld
    },
    template
};