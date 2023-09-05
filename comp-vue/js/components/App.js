import AppButton from './AppButton.js';

export default {
    components: {
        'app-button': AppButton,
        //or other way is by
        //AppButton, //directly cm tu je.. register.. so guna <AppButton/>
    },

    computed: {
        dualComputed() {
            return { //ni kalau nak buat antara dua call - simplify
                //dualComputed.first
                first: 'ayam',
                second: 'kucing'
            };
        },
        singleComputed() {
            return 'beruk';
        }
    }
};