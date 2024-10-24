const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL: 'http://192.168.29.118:1337/api' //ipv4 address replaced localhost  192.168.29.118 but localhost will also work
})

const getCategory = () => axiosClient.get('/items?populate=*');

const getSliders = () => axiosClient.get('/sliders?populate=*').then(res=> {
    console.log(res.data.data)
    return res.data.data
});

const getCategoryList = () => axiosClient.get('/items?populate=*').then(res=>{
    console.log(res.data.data)
    return res.data.data
})
export default{
    getCategory,getSliders,getCategoryList
}