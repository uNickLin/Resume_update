$(document).ready(function(){
  
  Vue.component("portfolio",{
    template: "#portfolio_format",
    props: ["file"],
    computed: {
      portfolio_css (){
        return {
          "background-image": "url('" + this.file.cover + "')"
        }
      }
    }
  })

  var vm = new Vue({
    el: '#app',
    data: {
      college: {
        name: '元智大學',
        major: '工業工程與管理學系',
        course: '人因工程學程'
      },
      company: {
        name: '頎邦科技',
        dep: '凸塊產品部',
        title: 'Layout工程師'
      },
      files : [
        {
          cover: "http://www.preapps.com/blog/wp-content/uploads/2015/08/keyword-optimization-for-search-marketing.jpg",
          name: "Keyword filter",
          link: "https://github.com/uNickLin/keyword_filter"
        },
        {
          cover: "https://static.vecteezy.com/system/resources/previews/000/098/703/original/vector-weather-icon-set.jpg",
          name: "Weather map",
          link: "https://github.com/uNickLin/weather_map"
        },
        {
          cover: "http://img1.juimg.com/151002/330723-15100204402626.jpg",
          name: "Hotel manage",
          link: "https://github.com/uNickLin/hotel_manage"
        }
      ]
    }
  })
  
});