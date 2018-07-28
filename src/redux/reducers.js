
import {combineReducers} from 'redux';
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
} from "./action-type";


   const initHomes= {
     /*
     * 首页
     */
     headCates: [],   //头部导航分类
     focusLists: [],  //页面轮播图
     tagLists: [],   //品牌制造商
     newItemLists: [],   //新品首发
     popularItemLists: [],   //人气推荐
     flashSaleIndexVO: {},  //限时购图片和福利社
     topicLists: [],   //专题精选
     cateLists: [],    //居家及以下所有

     /*
     * 第二页,识物
     */
     banners: [],    //识物banner
     columns: [],   //banner下面的channel
     recommend: {},   //为你推荐
     tenfifteens: [],    //十点一刻
     zhenpin: {},   //严选甄品
     yxLook: {},    //严选LOOK
     findMores: [],    //更多精选

     /*
     * 第三页分类列表
     */
     categorys : []//第三页
   }   //头部导航分类

function homes (state=initHomes,action){
  switch (action.type){
    case RECEIVE_HEADCATES:
      //如果请求的数据时首页头部列表
      const headCateList=action.data;
      return {...state, headCates:headCateList};
    case RECEIVE_FOCUSLISTS:
      //如果请求的数据是首页轮播
      const focusList=action.data;
      return {...state, focusLists:focusList};
    case RECEIVE_TAGLISTS:
      //如果请求的数据是首页品牌直供
      const tagLists=action.data;
      return {...state, tagLists:tagLists};
    case RECEIVE_NEWITEMLISTS:
      //如果请求的数据是首页新品首发
      const newItemLists=action.data;
      return {...state, newItemLists:newItemLists};
    case RECEIVE_POPULARITEMLISTS:
      //如果请求的数据是首页新品首发
      const popularItemLists=action.data;
      return {...state, popularItemLists:popularItemLists};
    case RECEIVE_FLASHSALEINDEXVO:
      //如果请求的数据是首页限时购
      const flashSaleIndexVO=action.data;
      return {...state, flashSaleIndexVO:flashSaleIndexVO};
    case RECEIVE_TOPICLISTS:
      //如果请求的数据是首页限时购
      const topicLists=action.data;
      return {...state, topicLists:topicLists};
    case RECEIVE_CATELISTS:
      //如果请求的数据是首页限时购
      const cateLists=action.data;
      return {...state, cateLists:cateLists};

      /*
      * 第二页识物
      */
    case   RECEIVE_BANNER:
      //如果请求的数据是首页限时购
      const banners=action.data;
      return {...state, banners:banners};
    case RECEIVE_COLUMN:
      //如果请求的数据是首页限时购
      const columns=action.data;
      return {...state, columns:columns};
    case RECEIVE_RECOMMEND:
      //如果请求的数据是首页限时购
      const recommend=action.data;
      return {...state, recommend:recommend};
    case RECEIVE_TENFIFTEEN:
      //如果请求的数据是首页限时购
      const tenfifteens=action.data;
      return {...state, tenfifteens:tenfifteens};
    case RECEIVE_ZHENPIN:
      //如果请求的数据是首页限时购
      const zhenpin=action.data;
      return {...state, zhenpin:zhenpin};
    case RECEIVE_YXLOOK:
      //如果请求的数据是首页限时购
      const yxLook=action.data;
      return {...state, yxLook:yxLook};
    case RECEIVE_FINDMORES:
      //如果请求的数据是首页限时购
      const findMores=action.data;
      return {...state, findMores:findMores};

    case RECEIVE_CATEGORYS:
      //如果请求的数据是第三页.
      const categorys=action.data;
      return {...state, categorys:categorys};
    default:
      return state;
  }
}

export default combineReducers({
  homes
})