import Vue from "vue"
import {
  RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS,
} from "./mutations-type";

export default {
/*
* 第一页,首页
*/
  //头部导航数据更新
  [RECEIVE_HEADCATES](state,{headCates}){
    state.headCates = headCates;
  },
  // 轮播数据更新
  [RECEIVE_FOCUSLISTS](state,{focusLists}){
    state.focusLists = focusLists;
  },
  //品牌直供更新
  [RECEIVE_TAGLISTS](state,{tagLists}){
    state.tagLists = tagLists;
  },
//  新品首发数据更新
  [RECEIVE_NEWITEMLISTS](state,{newItemLists}){
    state.newItemLists = newItemLists;
  },
//  好物推荐
  [RECEIVE_POPULARITEMLISTS](state,{popularItemLists}){
    state.popularItemLists = popularItemLists;
  },
//  限时,福利,专题
  [RECEIVE_FLASHSALEINDEXVO](state,{flashSaleIndexVO}){
    state.flashSaleIndexVO = flashSaleIndexVO;
  },
  //专题
  [RECEIVE_TOPICLISTS](state,{topicLists}){
    state.topicLists = topicLists;
  },
  //商品列表
  [RECEIVE_CATELISTS](state,{cateLists}){
    state.cateLists = cateLists;
  },



/*
* 第二页,识物
*/

  //轮播
  [RECEIVE_BANNER](state,{banners}){
    state.banners = banners;
  },
  //横向滑屏
  [RECEIVE_COLUMN](state,{columns}){
    state.columns = columns;
  },
  //为你推荐
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend = recommend;
  },
  //十点一刻
  [RECEIVE_TENFIFTEEN](state,{tenfifteens}){
    state.tenfifteens = tenfifteens;
  },
  //严选甄品
  [RECEIVE_ZHENPIN](state,{zhenpin}){
    state.zhenpin = zhenpin;
  },
  //严选look
  [RECEIVE_YXLOOK](state,{yxLook}){
    state.yxLook = yxLook;
  },
  //更多精彩
  [RECEIVE_FINDMORES](state,{findMores}){
    state.findMores = findMores;
  },


  /*
  * 第三页,分类
  */
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys;
  },

}
