<template>
  <div class="home">
    <SolideShow :imgs='image' v-bind:imgw='imgwd' v-if="image.length>0" />
  </div>
</template>

<script>
import SolideShow from '@/components/SolideShow.vue'

export default {
  name: 'Home',
  components: {
    SolideShow
  },
  data(){
    return {
      imgwd:850,
      image:[
        {
           imgs:[
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301492&di=4811c0352eff34f4e14666a8f9b7bc10&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1601a8269ac23c95309268f30e15a119c0146de142f1-bddX3u_fw658'},
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301492&di=f1d09f63f0502ff5a8f93edad0103dde&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F27%2F20170727160751_QtFNP.thumb.700_0.jpeg'},
           ] 
        },
        {
          imgs:[
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301492&di=26f0e22ceb0e1ad9293b58d479a4ed49&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F28%2F20181028130747_fyxpp.thumb.700_0.jpg'},
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301490&di=5fabf22f7630717cb52e5375758ab954&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F08%2F20170208213315_RQdZz.thumb.700_0.jpeg'},
           ] 
        },{
          imgs:[
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301489&di=ddd7ac0d3aaf1b3a686e84fa09124d6a&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F89392201.jpeg'},
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301488&di=ae8894315b47386644a2725e5b9d11fb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203002918_khgju.thumb.700_0.jpg'},
           ] 
        },{
          imgs:[
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102528293&di=62b1d375bb7f784dd809b6630bc900d4&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-30%2F202511986.jpg'},
             {img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2771571128,2053095068&fm=11&gp=0.jpg'},
           ] 
        },{
          imgs:[
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301531&di=51c9f61d2cd167272c74ad3385f60fc9&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F15%2F20141115192137_jRBYY.thumb.700_0.png'},
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301531&di=ff439cf9b1dfc192c2ae3f048980e638&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201505%2F13%2F20150513123418_2rycx.thumb.700_0.jpeg'},
           ] 
        },{
          imgs:[
             {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587102301528&di=b9264168ae99492a48ec8e2cb8a9adc7&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Ff9198618367adab45605c63c81d4b31c8601e4fc.jpg'},
             {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892860602,3833368995&fm=26&gp=0.jpg'},
           ] 
        },
        
        
    ]
    }
    
  }
}
</script>
