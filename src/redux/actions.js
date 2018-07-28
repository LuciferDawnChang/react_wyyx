
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
} from "./action-type"

/*
//分发状态的同步action
*/
/*首页*/
//获取首页顶部轮播成功的同步action,在异步action获取信息后触发
const receiveFocusList = (focusLists) =>({type:RECEIVE_FOCUSLISTS,data:focusLists});
//获取的品牌直供的状态和数据
const receiveTagLists = (tagLists) =>({type:RECEIVE_TAGLISTS,data:tagLists});
//获取的新品首发的状态和数据
const receiveNewItemLists = (newItemLists) =>({type:RECEIVE_NEWITEMLISTS,data:newItemLists});
//获取的新品首发的状态和数据
const receivePopularItemLists = (popularItemLists) =>({type:RECEIVE_POPULARITEMLISTS,data:popularItemLists});
//获取的限时购的状态和数据
const receiveFlashSaleIndexVO = (flashSaleIndexVO) =>({type:RECEIVE_FLASHSALEINDEXVO,data:flashSaleIndexVO});
//获取的专题精选的状态和数据
const receiveTopicLists = (topicLists) =>({type:RECEIVE_TOPICLISTS,data:topicLists});
//获取的分类商品列表的状态和数据
const receiveCateLists = (cateLists) =>({type:RECEIVE_CATELISTS,data:cateLists});

/*
第二页,识物
*/
//获取的分类商品列表的状态和数据
const receiveBanners = (banners) =>({type:RECEIVE_BANNER,data:banners});
//获取的分类商品列表的状态和数据
const receiveColumns = (columns) =>({type:RECEIVE_COLUMN,data:columns});
//获取的分类商品列表的状态和数据
const receiveRecommend = (recommend) =>({type:RECEIVE_RECOMMEND,data:recommend});
//获取的分类商品列表的状态和数据
const receiveTenfifteens = (tenfifteens) =>({type:RECEIVE_TENFIFTEEN,data:tenfifteens});
//获取的分类商品列表的状态和数据
const receiveZhenpin = (zhenpin) =>({type:RECEIVE_ZHENPIN,data:zhenpin});
//获取的分类商品列表的状态和数据
const receiveYxLook = (yxLook) =>({type:RECEIVE_YXLOOK,data:yxLook});
//获取的分类商品列表的状态和数据
const receiveFindMores = (findMores) =>({type:RECEIVE_FINDMORES,data:findMores});

/*
* 第三页
*/
const receiveCategorys = (categorys) =>({type:RECEIVE_CATEGORYS,data:categorys});



  /*
  第一页,首页
  */
  //首页头部导航列表
export const getHeadCatelist=()=>{
  return async dispatch=>{
    const result = await reqHeadCateList();
    if (result.code===0){
      const headCates =result.data;
      dispatch({type:RECEIVE_HEADCATES,data:headCates});
    }
  }
};

  // 首页轮播图
export const getFocusList = () => {
  return async (dispatch) => {
    const result = await reqFocusList();
    if (result.code === 0) {
      const focusLists = result.data;
      dispatch(receiveFocusList(focusLists));
    }
  }
};
  //首页品牌直供
export const getTagLists=()=>{
  return async (dispatch)=>{
    const result = await reqTagList();
    if (result.code===0){
      const tagLists =result.data;
      // console.log(tagLists);
      dispatch(receiveTagLists(tagLists));
    }
  }
};

  //新品首发
export const getItemLists = () =>{
  return async dispatch =>{
    const result = await reqNewItemList();
    if (result.code===0){
      const newItemLists =result.data;
      dispatch(receiveNewItemLists(newItemLists))
    }
  }
};
  //好物推荐
export const getPopularItemList=()=>{
  return async dispatch=>{
    const result = await reqPopularItemList();
    if (result.code===0){
      const popularItemLists =result.data;
      dispatch(receivePopularItemLists(popularItemLists));
    }
  }
};
  //限时,福利,下面专题
  export const getFlashSaleIndexVO=()=>{
    return async (dispatch)=>{
      const result = await reqFlashSaleIndexVO();
      if (result.code===0){
        const flashSaleIndexVO =result.data;
        dispatch(receiveFlashSaleIndexVO(flashSaleIndexVO));
      }
    }

  };
  //专题
  export const getTopicLists=()=>{
    return async  dispatch =>{
      const result = await reqTopicList();
      if (result.code===0){
        const topicLists =result.data;
        dispatch(receiveTopicLists(topicLists))
      }
    }
  };
//   //分类商品列表
  export const getCateLists=()=>{
    return async dispatch =>{
      const result = await reqCateList();
      if (result.code===0){
        const cateLists =result.data;
        dispatch(receiveCateLists(cateLists));
      }
    }
  };

//
//
//
//
//
   /*
  第二页,识图
  */
  //轮播
export const getBanners=()=>{
  return async dispatch =>{
    const result = await reqBanner();
    if (result.code===0){
      const banners =result.data;
      dispatch(receiveBanners(banners));
    }
  }
};
  //横向滑屏
export const getColumns=()=>{
  return async dispatch =>{
    const result = await reqColumn();
    if (result.code===0){
      const columns =result.data;
      dispatch(receiveColumns(columns));
    }
  }
};

  // //为你推荐
export const getRecommend=()=>{
  return async dispatch =>{
    const result = await reqRecommend();
    if (result.code===0){
      const recommend =result.data;
      dispatch(receiveRecommend(recommend));
    }
  }
};

  // //十点一刻
export const getTenfifteens=()=>{
  return async dispatch =>{
    const result = await reqTenfifteen();
    if (result.code===0){
      const tenfifteens =result.data;
      dispatch(receiveTenfifteens(tenfifteens));
    }
  }
};

  // //严选甄品
export const getZhenpin=()=>{
  return async dispatch =>{
    const result = await reqZhenpin();
    if (result.code===0){
      const zhenpin =result.data;
      dispatch(receiveZhenpin(zhenpin));
    }
  }
};

  //严选look
export const getYxLook=()=>{
  return async dispatch =>{
    const result = await reqYxLook();
    if (result.code===0){
      const yxLook =result.data;
      dispatch(receiveYxLook(yxLook));
    }
  }
};

  // //更多精彩
export const getFindMores=()=>{
  return async dispatch =>{
    const result = await reqFindMore();
    if (result.code===0){
      const findMores =result.data;
      dispatch(receiveFindMores(findMores));
    }
  }
};

  /*
  分类组件
  */
  export const getCategorys=()=>{
    return async dispatch=>{
      const result = await reqCategoryData();
      if (result.code===0){
        const categorys = result.data;
        dispatch(receiveCategorys(categorys))
      }
    }
  }
//
//
// }