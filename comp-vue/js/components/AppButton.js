export default {
    template: `
        <div>
            <button :disabled="flagBool" @click="clicking" class='bg-gray-200 hover:animate-bounce border mx-5 my-5 rounded duration-300 disabled:cursor-not-allowed'>
                <slot/>
            </button>
            <input type="checkbox" @click="()=>{this.flagBool = !this.flagBool;}"/>
            <p v-if="type == 'plainstring'">Ini adalah drill</p>

            <hr>
            <button :class="{
                'hover:animate-bounce border mx-5 my-5 rounded duration-300 disabled:cursor-not-allowed' : true,
                'bg-blue-200' : type == 'plainstring'
            }">
                <slot/>
            </button>
        </div>
    `,

    data() {
        return {
            flagBool : false,
        };
    },

    methods: {
        clicking : function () {
            alert('hencemnye!');
        }
    },

    props: {
        //type : String
        //or boleh buat macam ni
        type: { //<---- nama dia memang type haha sbab declare tadi
            type: String,
            default: 'primary'
        }
    },

    mounted() {
        console.log('hello');
    }
}


// sedikit nota
/*
<button :class="{
    'bg-gray-200 hover:animate-bounce border mx-5 my-5 rounded duration-300 disabled:cursor-not-allowed' : true,
    'bg-blue-200' : type == 'plainstring'
}">


ni cara buat object approach untuk define class.
so, dkt sini boleh buat expression jika true class ni on..

mesti format dia cam ni

{
    'attribute class' : expression,
    'attribute class2' : expression2
}
//wajib ada true or false tu

*/