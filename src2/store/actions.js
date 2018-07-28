
import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqYxLook,
  reqFindMore,
  reqCategoryData,
} from "../api/index";
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
} from "./mutations-type"


export default {
/*
第一页,首页
*/
  //首页头部导航列表
  async getHeadCatelist({commit},callBack){
    const result = await reqHeadCateList();
    if (result.code===0){
      const headCates =result.data;
      commit(RECEIVE_HEADCATES,{headCates})
    }
    callBack && callBack()
  },
  // 首页轮播图
  async getFocusList({commit},callBack){
    const result = await reqFocusList();
    if (result.code===0){
      const focusLists =result.data;
      commit(RECEIVE_FOCUSLISTS,{focusLists})
    }
    callBack && callBack()
  },
  //首页品牌直供
  async getTagLists({commit}){
    const result = await reqTagList();
    if (result.code===0){
      const tagLists =result.data;
      commit(RECEIVE_TAGLISTS,{tagLists})
    }
  },
  //新品首发
  async getItemLists({commit},callBack){
    const result = await reqNewItemList();
    if (result.code===0){
      const newItemLists =result.data;
      commit(RECEIVE_NEWITEMLISTS,{newItemLists})
    }
    callBack && callBack()
  },
  //好物推荐
  async getPopularItemList({commit},callBack){
    const result = await reqPopularItemList();
    if (result.code===0){
      const popularItemLists =result.data;
      commit(RECEIVE_POPULARITEMLISTS,{popularItemLists})
    }
    callBack && callBack()
  },
  //限时,福利,下面专题
  async getFlashSaleIndexVO({commit},callBack){
    const result = await reqFlashSaleIndexVO();
    if (result.code===0){
      const flashSaleIndexVO =result.data;
      commit(RECEIVE_FLASHSALEINDEXVO,{flashSaleIndexVO})
    }
    callBack && callBack()
  },
  //专题
  async getTopicLists({commit},callBack){
    const result = await reqTopicList();
    if (result.code===0){
      const topicLists =result.data;
      commit(RECEIVE_TOPICLISTS,{topicLists})
    }
    callBack && callBack()
  },
  //分类商品列表
  async getCateLists({commit},callBack){
    const result = await reqCateList();
    if (result.code===0){
      const cateLists =result.data;
      commit(RECEIVE_CATELISTS,{cateLists})
    }
    callBack && callBack()
  },





/*
第二页,识图
*/
  //轮播
  async getBanners({commit},callBack){
    const result = await reqBanner();
    if (result.code===0){
      const banners = result.data;
      commit(RECEIVE_BANNER,{banners})
    }
    callBack && callBack()
  },
  //横向滑屏
  async getColumns({commit},callBack){
    const result = await reqColumn();
    if (result.code===0){
      const columns = result.data;
      commit(RECEIVE_COLUMN,{columns})
    }
    callBack && callBack()
  },
  //为你推荐
  async getRecommend({commit},callBack){
    const result = await reqRecommend();
    if (result.code===0){
      const recommend = result.data;
      commit(RECEIVE_RECOMMEND,{recommend})
    }
    callBack && callBack()
  },
  //十点一刻
  async getTenfifteens({commit},callBack){
    const result = await reqTenfifteen();
    if (result.code===0){
      const tenfifteens = result.data;
      commit(RECEIVE_TENFIFTEEN,{tenfifteens})
    }
    callBack && callBack()
  },
  //严选甄品
  async getZhenpin({commit},callBack){
    const result = await reqZhenpin();
    if (result.code===0){
      const zhenpin = result.data;
      commit(RECEIVE_ZHENPIN,{zhenpin})
    }
    callBack && callBack()
  },
  //严选look
  async getYxLook({commit},callBack){
    const result = await reqYxLook();
    if (result.code===0){
      const yxLook = result.data;
      commit(RECEIVE_YXLOOK,{yxLook})
    }
    callBack && callBack()
  },
  //更多精彩
  async getFindMores({commit},callBack){
    const result = await reqFindMore();
    if (result.code===0){
      const findMores = result.data;
      commit(RECEIVE_FINDMORES,{findMores})
    }
    callBack && callBack()
  },


  /*
  分类组件
  */
  async getCategorys({commit},callBack){
    const result = await reqCategoryData();
    if (result.code===0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
    callBack && callBack()
  },


}