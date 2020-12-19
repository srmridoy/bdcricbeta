module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("40Vc");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "40Vc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8BIh");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JIqo");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nOYO");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_Components_Advertisement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tvFC");
/* harmony import */ var _src_Components_LiveScoreSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EBWL");
/* harmony import */ var _src_Components_ICCTeamRanking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("L4NP");
/* harmony import */ var _src_Components_MostPopular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("EVmU");
/* harmony import */ var _src_Components_Trending__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("5oWj");
/* harmony import */ var _src_Components_PlayersData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Bh5c");
/* harmony import */ var _src_Components_LatestNews__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("gwpy");
/* harmony import */ var _src_pages_RelatedNews__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("STVM");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("xXj+");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_pages_Error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("UALF");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















function NewsDetails(props) {
  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return __jsx(_src_pages_Error__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
      message: props.error
    });
  }

  const history = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.news);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.loaded);
  const {
    0: commntsLoaded,
    1: setCommentsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.commntsLoaded);
  const {
    0: commentSort,
    1: setCommentSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('new');
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.comments);
  console.log(comments);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getNews() {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?slug=' + history.query.newsSlug + '&_embed').then(res2 => {
        setNews(res2.data[0]);
        setLoaded(true);
      });
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://api.shadowbangladesh.com/get_comment', {
        params: {
          url: history.pathname
        }
      }).then(res => {
        setComments(res.data);
        setCommentsLoaded(true);
      });
    }

    getNews();
  }, [history.pathname, history.query.newsSlug]);

  const handleComment = event => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = event => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://api.shadowbangladesh.com/post_comment', {
      params: {
        name: 'Unknown',
        url: history.pathname,
        comment: comment,
        parent: null
      }
    }).then(res => {
      setComments(res.data);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, loaded ? he__WEBPACK_IMPORTED_MODULE_7___default.a.decode(news.title.rendered) + ' - BDCricTime' : null)), __jsx(_src_Components_LiveScoreSlider__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null), __jsx("div", {
    className: "news-content-area fx-padding"
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3 order-2 order-lg-1"
  }, __jsx("div", {
    className: "sidebar-widget-wrapper"
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] ? __jsx(_src_pages_RelatedNews__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null) : null, react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] ? null : __jsx(_src_Components_Trending__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] ? null : __jsx(_src_Components_ICCTeamRanking__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null), react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] ? null : __jsx(_src_Components_PlayersData__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null))), __jsx("div", {
    className: "col-lg-6 order-1 order-lg-2"
  }, __jsx("div", {
    className: "news-main-content"
  }, __jsx("div", {
    className: "post-content-inner-blk"
  }, __jsx("div", {
    className: "sigle-post-wrp"
  }, __jsx("div", {
    className: "single-post-top-blk"
  }, __jsx("h3", null, loaded ? he__WEBPACK_IMPORTED_MODULE_7___default.a.decode(news.title.rendered) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    count: 2
  })), __jsx("p", null, loaded ? he__WEBPACK_IMPORTED_MODULE_7___default.a.decode(news.acf.lead_text ? news.acf.lead_text : news.excerpt.rendered.replace(/<[^>]*>?/gm, '')) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    count: 3
  })), __jsx("div", {
    style: {
      textAlign: 'center',
      marginTop: '20px'
    }
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] ? __jsx(_src_Components_Advertisement__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    size: 320100,
    imgstyle: {
      width: '100%'
    }
  }) : __jsx(_src_Components_Advertisement__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    size: 46860
  }))), __jsx("div", {
    className: "single-post-tm"
  }, __jsx("img", {
    src: loaded ? news._embedded['wp:featuredmedia'][0].source_url : '/img/post-thumbnail.svg',
    alt: ""
  }), __jsx("p", null, loaded ? he__WEBPACK_IMPORTED_MODULE_7___default.a.decode(news._embedded['wp:featuredmedia'][0].caption.rendered.replace(/(<([^>]+)>)/gi, '')) : null)), __jsx("div", {
    className: "post-writer-blk"
  }, __jsx("div", {
    className: "post-writer-info"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-5"
  }, __jsx("div", {
    className: "pst-w-left-blk"
  }, __jsx("img", {
    src: loaded ? news.acf.avatar ? news.acf.avatar : '/img/avater.svg' : '/img/avater.svg',
    alt: ""
  }), __jsx("div", {
    className: "post-auth-info"
  }, __jsx("h3", null, loaded ? news.acf.reporter_name ? news.acf.reporter_name : news._embedded.author[0].name : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: 100
  }), __jsx("span", null, loaded ? news.acf.designation : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: 60
  }))), __jsx("p", null, loaded ? 'BDCricTime English' : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: 80
  }))))), __jsx("div", {
    className: "col-md-7"
  }, __jsx("div", {
    className: "pst-w-right-blk"
  }, __jsx("p", null, loaded ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Editor -", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/news/author/' + news.author + '/' + news._embedded.author[0].name
  }, __jsx("a", null, news._embedded.author[0].name))) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: "70%"
  })), __jsx("p", null, loaded ? 'Posted - ' + dateformat__WEBPACK_IMPORTED_MODULE_6___default()(news.date, 'mmmm dd, yyyy hh:MM TT') : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: "70%"
  })), __jsx("p", null, loaded ? 'Updated - ' + dateformat__WEBPACK_IMPORTED_MODULE_6___default()(news.modified, 'mmmm dd, yyyy hh:MM TT') : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    width: "70%"
  })))))), __jsx("div", {
    className: "post-main-content-all"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12"
  }, loaded ? news.acf.highlights ? __jsx("div", {
    className: "hlt-text"
  }, __jsx("h4", null, "Highlights"), __jsx("div", {
    className: "hlt-text-list"
  }, news.acf.highlights.map((news, index) => __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/' + news.post_name
  }, __jsx("a", null, " ", news.post_title)))))) : null : null, loaded ? __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: news.content.rendered
    }
  }) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    count: 7
  }))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("div", {
    className: "share-btn"
  }, loaded ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/redirect?url=https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000' + history.asPath
  }, __jsx("a", {
    target: "_blank"
  }, __jsx("img", {
    src: "/assets/img/fb_share.svg",
    alt: ""
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href:  true ? news.acf.lead_text : undefined
  }, __jsx("a", {
    target: "_blank"
  }, __jsx("img", {
    src: "/assets/img/twitte.svg",
    alt: ""
  })))) : null))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("div", {
    className: "tags-btn"
  }, loaded && news._embedded['wp:term'][1][0] ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, "Tags"), news._embedded['wp:term'][1].map((tag, index) => index < 4 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: index,
    href: '/news/tag/' + tag.id + '/' + tag.slug
  }, __jsx("a", null, " ", tag.name)) : null)) : null))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("div", {
    className: "comment-wrp"
  }, __jsx("div", {
    className: "comment-box"
  }, __jsx("form", {
    action: ""
  }, __jsx("textarea", {
    cols: 30,
    rows: 10,
    placeholder: "Type your comment here...",
    defaultValue: "",
    onChange: handleComment
  }, comment), __jsx("div", {
    className: "bottom-action-btns"
  }, "To post a comment please", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("a", null, "Login")), "or", __jsx("button", {
    type: "button",
    onClick: handleCommentSubmit
  }, "Post as anonymous"))))))))))))), __jsx("div", {
    className: "col-lg-3 order-3 order-lg-3"
  }, __jsx("div", {
    className: "sidebar-widget-wrapper"
  }, __jsx(_src_Components_Advertisement__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    size: 320100,
    style: {
      marginBottom: '15px'
    }
  }), __jsx(_src_Components_LatestNews__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null), __jsx(_src_Components_MostPopular__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null)))))));
}

async function getServerSideProps({
  req,
  params
}) {
  try {
    const param = {
      params: {
        token: '437214169d9be2a73e91d22f76f68b52'
      }
    };
    const url = 'https://www.bdcrictime.com/wp-json/wp/v2/posts?slug=' + params.newsSlug + '&_embed';
    const res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url, param);
    const res2 = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://api.shadowbangladesh.com/get_comment', {
      params: {
        url: req.url,
        token: '437214169d9be2a73e91d22f76f68b52'
      }
    });
    return {
      props: {
        news: res.data[0],
        comment: res2.data,
        commntsLoaded: true,
        loaded: true
      }
    };
  } catch (err) {
    return {
      props: {
        error: err.message
      }
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (NewsDetails);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5oWj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_NewsCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6LZC");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Trending(props) {
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function getNews() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=2&_embed', {
      params: {
        token: '437214169d9be2a73e91d22f76f68b52'
      }
    }).then(res => {
      setNews(res.data);
      setLoaded(true);
    }).catch(err => console.log('Error in Trending' + err.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getNews();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "sidebar-widget trend-widget"
  }, __jsx("h4", {
    className: "heading-title"
  }, "Trending Now"), __jsx("nav", null, __jsx("ul", null, news.map((news, index) => __jsx(_Components_NewsCards__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    key: index,
    format: "small-side",
    headline: loaded ? news.title.rendered : null,
    thumbnail: loaded ? news._embedded['wp:featuredmedia'][0].source_url : null,
    id: news.id,
    slug: news.slug
  }))))));
}

/* harmony default export */ __webpack_exports__["a"] = (Trending);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6LZC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8BIh");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nOYO");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("siz1");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function NewsCards(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.format === 'lead' ? __jsx(Lead, props) : props.format === 'boxed-down' ? __jsx(BoxedDown, props) : props.format === 'boxed-side' ? __jsx(BoxedSide, props) : props.format === 'small-down' ? __jsx(SmallDown, props) : props.format === 'small-side' ? __jsx(SmallSide, props) : props.format === 'with-count' ? __jsx(WithCount, props) : 'Please Insert Card Format');
}

function Lead(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "post"
  }, __jsx("div", {
    className: "img"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("img", {
    src: props.thumbnail ? props.thumbnail : '/img/post-thumbnail.svg',
    alt: props.imageAlt ? props.imageAlt : ''
  })))), __jsx("div", {
    className: "content"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("h4", null, props.headline ? he__WEBPACK_IMPORTED_MODULE_3___default.a.decode(props.headline) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, null)))), __jsx("p", null, props.leadText ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.leadText, "...", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", {
    className: "read-more"
  }, " Read Ful Article"))) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 3
  })))));
}

function BoxedDown(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["SkeletonTheme"], {
    color: "rgba(255, 255, 255, .1)",
    highlightColor: "rgba(255, 255, 255, .05)"
  }, __jsx("div", {
    className: "post2"
  }, __jsx("div", {
    className: "img"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("img", {
    src: props.thumbnail ? props.thumbnail : '/img/newsupdate thumbnail.svg',
    alt: props.imageAlt ? props.imageAlt : ''
  })))), __jsx("div", {
    className: "content"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("h5", null, props.headline ? he__WEBPACK_IMPORTED_MODULE_3___default.a.decode(props.headline) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 2
  })))), __jsx("p", null, props.leadText ? props.leadText.slice(0, 240) + '...' : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 7
  })), props.leadText ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", {
    className: "read-more"
  }, " READ MORE")) : null))));
}

function BoxedSide(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["SkeletonTheme"], {
    color: "rgba(255, 255, 255, .1)",
    highlightColor: "rgba(255, 255, 255, .05)"
  }, __jsx("div", {
    className: "post3 "
  }, __jsx("div", {
    className: "row",
    style: {
      width: '110%'
    }
  }, __jsx("div", {
    className: " col-sm-4"
  }, __jsx("div", {
    className: "img"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("img", {
    src: props.thumbnail ? props.thumbnail : '/img/post-img2.png',
    alt: props.imageAlt ? props.imageAlt : ''
  }))))), __jsx("div", {
    className: "col-sm-8"
  }, __jsx("div", {
    className: "content"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("h5", null, props.headline ? he__WEBPACK_IMPORTED_MODULE_3___default.a.decode(props.headline) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, null)))), __jsx("p", null, props.leadText ? props.leadText + '...' : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 4
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", {
    className: "read-more"
  }, " READ MORE"))))))));
}

function SmallDown(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "post4 col-md-4 col-6"
  }, __jsx("div", {
    className: "img"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("img", {
    src: props.thumbnail ? props.thumbnail : '/assets/img/post-img3.svg',
    alt: props.imageAlt ? props.imageAlt : ''
  })))), __jsx("div", {
    className: "content"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("h6", null, props.headline ? he__WEBPACK_IMPORTED_MODULE_3___default.a.decode(props.headline) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 2
  })))), __jsx("span", {
    style: {
      textTransform: 'uppercase'
    }
  }, props.published ? __jsx(react_moment__WEBPACK_IMPORTED_MODULE_4___default.a, {
    format: "DD MMM YYYY"
  }, props.published) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, null)))));
}

function SmallSide(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", null, __jsx("div", {
    className: "img"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, props.thumbnail ? __jsx("img", {
    src: props.thumbnail,
    alt: props.imageAlt ? props.imageAlt : ''
  }) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: '50px',
    width: '50px'
  })))), __jsx("div", {
    className: "content"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("p", null, props.headline ? he__WEBPACK_IMPORTED_MODULE_3___default.a.decode(props.headline) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 2,
    width: '80%'
  })))))));
}

function WithCount(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", null, __jsx("span", null, props.count ? props.count : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    width: "30px",
    height: "30px"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.id && props.slug ? '/' + props.slug : ''
  }, __jsx("a", null, __jsx("p", null, props.headline ? he__WEBPACK_IMPORTED_MODULE_3___default.a.decode(props.headline) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    count: 2,
    width: '80%'
  }))))));
}

/* harmony default export */ __webpack_exports__["a"] = (NewsCards);

/***/ }),

/***/ "8BIh":
/***/ (function(module, exports) {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ "Bh5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8BIh");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PlayersData() {
  const {
    0: players,
    1: setPlayers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}, {}, {}]);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const fireSearch = event => {
    event.preventDefault();

    if (search) {
      setPlayers([{}, {}, {}, {}]);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://rest.entitysport.com/v2/players?search=' + search + '&paged=1&per_page=10').then(function (res) {
        setPlayers(res.data.response.items);
      });
    }
  };

  async function getPlayers() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://rest.entitysport.com/v2/players?country=bd', {
      params: {
        token: '437214169d9be2a73e91d22f76f68b52'
      }
    }).then(res => {
      setPlayers(res.data.response.items);
    }).catch(err => console.log('Error in PlayerData' + err.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPlayers();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "sidebar-widget player-widget"
  }, __jsx("h4", {
    className: "heading-title"
  }, "Players Data"), __jsx("nav", null, __jsx("div", {
    className: "top-search-bar"
  }, __jsx("form", {
    onSubmit: fireSearch
  }, __jsx("button", {
    type: "submit"
  }, __jsx("i", {
    className: "fal fa-search"
  })), __jsx("input", {
    type: "text",
    placeholder: "Search player",
    value: search,
    onChange: handleSearch
  }))), __jsx("ul", null, players.map((item, index) => __jsx("li", {
    key: index
  }, item.title ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, __jsx("img", {
    src: "/img/player-img.svg",
    alt: item.title
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/player/profile/' + item.pid + '/' + item.title.toLowerCase().replace(' ', '-')
  }, __jsx("a", null, __jsx("p", {
    style: {
      marginLeft: '15px'
    }
  }, item.title), ' '))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, __jsx("img", {
    src: "/img/player-img.svg",
    alt: ""
  })), __jsx("p", {
    style: {
      marginLeft: '15px'
    }
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    width: 150
  })))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (PlayersData);

/***/ }),

/***/ "EBWL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JIqo");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function LiveScoreSlider(props) {
  const {
    0: liveMatches,
    1: setLiveMatches
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.liveMatches ? props.liveMatches : []);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.loaded ? props.loaded : false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('This will run every second!');
    const date = new Date();
    const tomorrow = dateformat__WEBPACK_IMPORTED_MODULE_3___default()(date.setDate(date.getDate() + 1), 'yyyy-mm-dd');
    const yesterday = dateformat__WEBPACK_IMPORTED_MODULE_3___default()(date.setDate(date.getDate() - 1), 'yyyy-mm-dd');

    function getLiveMatches() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://rest.entitysport.com/v2/matches/?per_page=100&date=' + yesterday + '_' + tomorrow, {
        params: {
          token: '437214169d9be2a73e91d22f76f68b52'
        }
      }).then(res => {
        var filtered = res.data.response.items.filter(function (item) {
          return item.competition.country === 'int' || item.competition.country === 'in' || item.competition.country === 'au' || item.competition.country === 'pk';
        });
        var final = filtered.length > 3 ? filtered : res.data.response.items;
        setLiveMatches(final.reverse());
        setLoaded(true);
        $('.live-match-slider').not('.slick-initialized').slick({
          dots: false,
          centerMode: true,
          arrows: true,
          centerPadding: '50px',
          initialSlide: 1,
          slidesToShow: 5,
          prevArrow: '<button class="prev"><img src="/assets/img/left.svg" alt="logo"></button>',
          nextArrow: '<button class="next"><img src="/assets/img/right.svg" alt="logo"></button>',
          responsive: [{
            breakpoint: 1600,
            settings: {
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 5
            }
          }, {
            breakpoint: 1400,
            settings: {
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 3
            }
          }, {
            breakpoint: 992,
            settings: {
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          }]
        });
      }).catch(err => console.log('Error in Live Score' + err.message));
    }

    getLiveMatches();
    const interval = setInterval(() => {
      getLiveMatches();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loaded ? __jsx("div", {
    className: "live-match-area"
  }, __jsx("div", null, __jsx("div", {
    className: "live-match-slider"
  }, liveMatches.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: index,
    href: '/match/details/' + item.match_id + '/' + item.title.toLowerCase().split(' ').join('-')
  }, __jsx("a", null, __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "live-match-item"
  }, __jsx("div", {
    className: "title"
  }, __jsx("h5", null, item.competition.title)), __jsx("div", {
    className: "compare-country"
  }, __jsx("span", {
    className: "country-logo"
  }, __jsx("img", {
    src: item.teama.logo_url,
    alt: item.teama.name
  })), __jsx("span", {
    className: "country-vs"
  }, __jsx("p", null, "VS")), __jsx("span", {
    className: "country-logo"
  }, __jsx("img", {
    src: item.teamb.logo_url,
    alt: item.teamb.name
  }))), __jsx("div", {
    className: "compare-run"
  }, __jsx("div", {
    className: "run"
  }, __jsx("h4", null, item.teama.short_name, ' ', item.teama.scores ? item.teama.scores : '0/0', ' ', __jsx("span", null, item.teamb.overs ? item.teama.overs + ' OVERS' : '0 OVER'))), __jsx("div", {
    className: "div"
  }, ' ', __jsx("img", {
    src: "/assets/img/compare-div.svg",
    alt: "svg"
  }), ' '), __jsx("div", {
    className: "run"
  }, __jsx("h4", null, item.teamb.short_name, ' ', item.teamb.scores ? item.teama.scores : '0/0', ' ', __jsx("span", null, item.teamb.overs ? item.teamb.overs + ' OVERS' : '0 OVER'), ' '))), __jsx("div", {
    className: "compare-match"
  }, __jsx("p", null, item.status_note ? item.status_note : 'To be played')))))))))) : null);
}

/* harmony default export */ __webpack_exports__["a"] = (LiveScoreSlider);

/***/ }),

/***/ "EVmU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function MostPopular() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "sidebar-widget popular-widget"
  }, __jsx("h4", {
    className: "heading-title"
  }, "Most Popular"), __jsx("div", null, __jsx("div", {
    className: "nav nav-tabs",
    id: "nav-tab",
    role: "tablist"
  }, __jsx("a", {
    className: "nav-item nav-link active",
    "data-toggle": "tab",
    href: "#nav-7"
  }, "Today"), __jsx("a", {
    className: "nav-item nav-link",
    "data-toggle": "tab",
    href: "#nav-8"
  }, "Last 7 Days"), __jsx("a", {
    className: "nav-item nav-link",
    "data-toggle": "tab",
    href: "#nav-9"
  }, "Last 30 Days"))), __jsx("div", {
    className: "tab-content",
    id: "nav-tabContent"
  }, __jsx("div", {
    className: "tab-pane fade show active",
    id: "nav-7"
  }, __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx("span", null, "1"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", null, __jsx("p", null, "Lorem Ipsum is simply dummy ..")))), __jsx("li", null, __jsx("span", null, "3"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", null, __jsx("p", null, "Lorem int and typesetting int and typesetting int and typesetting int and typesetting..."))))))), __jsx("div", {
    className: "tab-pane fade",
    id: "nav-8"
  }), __jsx("div", {
    className: "tab-pane fade",
    id: "nav-9"
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (MostPopular);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JIqo":
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "L4NP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ICCTeamRanking() {
  const {
    0: odiRanking,
    1: setOdiRanking
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}, {}, {}, {}]);
  const {
    0: t20Ranking,
    1: setT20Ranking
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}, {}, {}, {}]);
  const {
    0: testRanking,
    1: setTestRanking
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}, {}, {}, {}]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function getRank() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://rest.entitysport.com/v2/iccranks', {
      params: {
        token: '437214169d9be2a73e91d22f76f68b52'
      }
    }).then(res => {
      setOdiRanking(res.data.response.ranks.teams.odis);
      setT20Ranking(res.data.response.ranks.teams.tests);
      setTestRanking(res.data.response.ranks.teams.t20s);
      setLoaded(true);
    }).catch(err => console.log('Error in ICCTeamRanking' + err.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getRank();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "sidebar-widget rank-widget"
  }, __jsx("h4", {
    className: "heading-title"
  }, "ICC TEAM RANKING"), __jsx("div", null, __jsx("div", {
    className: "nav nav-tabs",
    id: "nav-tab",
    role: "tablist"
  }, __jsx("a", {
    className: "nav-item nav-link active",
    "data-toggle": "tab",
    href: "#nav-4"
  }, "ODI"), __jsx("a", {
    className: "nav-item nav-link",
    "data-toggle": "tab",
    href: "#nav-5"
  }, "T20"), __jsx("a", {
    className: "nav-item nav-link",
    "data-toggle": "tab",
    href: "#nav-6"
  }, "TEST"))), __jsx("div", {
    className: "tab-content",
    id: "nav-tabContent"
  }, __jsx("div", {
    className: "tab-pane fade show active",
    id: "nav-4"
  }, __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx("ol", null, __jsx("li", null, __jsx("p", null, "Pos")), __jsx("li", null, __jsx("p", null, "Team")), __jsx("li", null, __jsx("p", null, "Rating")))), loaded ? odiRanking.map((item, index) => index < 5 ? __jsx("li", {
    key: index
  }, __jsx("ol", null, __jsx("li", null, __jsx("p", null, item.rank)), __jsx("li", null, __jsx("p", null, item.team)), __jsx("li", null, __jsx("p", null, item.points)))) : null) : null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/teams/odi"
  }, __jsx("a", null, "Watch full ranking")))))), __jsx("div", {
    className: "tab-pane fade",
    id: "nav-5"
  }, __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx("ol", null, __jsx("li", null, __jsx("p", null, "Pos")), __jsx("li", null, __jsx("p", null, "Team")), __jsx("li", null, __jsx("p", null, "Rating")))), loaded ? t20Ranking.map((item, index) => index < 5 ? __jsx("li", {
    key: index
  }, __jsx("ol", null, __jsx("li", null, __jsx("p", null, item.rank)), __jsx("li", null, __jsx("p", null, item.team)), __jsx("li", null, __jsx("p", null, item.points)))) : null) : null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/teams/t20"
  }, __jsx("a", null, "Watch full ranking")))))), __jsx("div", {
    className: "tab-pane fade",
    id: "nav-6"
  }, __jsx("nav", null, __jsx("ul", null, __jsx("li", null, __jsx("ol", null, __jsx("li", null, __jsx("p", null, "Pos")), __jsx("li", null, __jsx("p", null, "Team")), __jsx("li", null, __jsx("p", null, "Rating")))), loaded ? testRanking.map((item, index) => index < 5 ? __jsx("li", {
    key: index
  }, __jsx("ol", null, __jsx("li", null, __jsx("p", null, item.rank)), __jsx("li", null, __jsx("p", null, item.team)), __jsx("li", null, __jsx("p", null, item.points)))) : null) : null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/teams/test"
  }, __jsx("a", null, "Watch full ranking")))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (ICCTeamRanking);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "STVM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_NewsCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6LZC");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RelatedNews() {
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function getNews() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=8&_embed').then(res => {
      setNews(res.data);
      setLoaded(true);
    }).catch(err => console.log('Error in RelatedNews' + err.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getNews();
  }, [loaded]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "news-widget pb-0"
  }, __jsx("div", {
    className: "title"
  }, __jsx("div", {
    className: "left"
  }, __jsx("h6", null, "Related News"))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("div", {
    className: "row"
  }, news.map((news, index) => index > 1 ? __jsx(_Components_NewsCards__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    key: index,
    format: "small-down",
    headline: loaded ? news.title.rendered : null,
    thumbnail: loaded ? news._embedded['wp:featuredmedia'][0].source_url : null,
    id: news.id,
    slug: news.slug,
    published: news.date
  }) : null))))));
}

/* harmony default export */ __webpack_exports__["a"] = (RelatedNews);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UALF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Error() {
  return __jsx("div", {
    id: "notfound",
    className: "jsx-1429454970"
  }, __jsx("div", {
    className: "jsx-1429454970" + " " + "notfound"
  }, __jsx("div", {
    className: "jsx-1429454970" + " " + "notfound-404"
  }, __jsx("h1", {
    className: "jsx-1429454970"
  }, "Oops!")), __jsx("h2", {
    className: "jsx-1429454970"
  }, "Something went Wrong"), __jsx("p", {
    className: "jsx-1429454970"
  }, ' ', "An occured while processing your request. The support team is notified and we are working on the fix"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-1429454970"
  }, "Go To Homepage"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1429454970"
  }, ["*.jsx-1429454970{-webkit-box-sizing:border-box;box-sizing:border-box;}", "body.jsx-1429454970{padding:0;margin:0;}", "#notfound.jsx-1429454970{position:relative;height:100vh;}", "#notfound.jsx-1429454970 .notfound.jsx-1429454970{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".notfound.jsx-1429454970{max-width:410px;width:100%;text-align:center;}", ".notfound.jsx-1429454970 .notfound-404.jsx-1429454970{height:280px;position:relative;z-index:-1;}", ".notfound.jsx-1429454970 .notfound-404.jsx-1429454970 h1.jsx-1429454970{font-family:'Montserrat',sans-serif;font-size:230px;margin:0px;font-weight:900;position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:url('/assets/img/bg.jpg') no-repeat;-webkit-background-clip:text;background-color:transparent;-webkit-text-fill-color:transparent;background-size:cover;background-position:center;}", ".notfound.jsx-1429454970 h2.jsx-1429454970{font-family:'Montserrat',sans-serif;color:#000;font-size:24px;font-weight:700;text-transform:uppercase;margin-top:0;}", ".notfound.jsx-1429454970 p.jsx-1429454970{font-family:'Montserrat',sans-serif;color:#000;font-size:14px;font-weight:400;margin-bottom:20px;margin-top:0px;}", ".notfound.jsx-1429454970 a.jsx-1429454970{font-family:'Montserrat',sans-serif;font-size:14px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;background:#0046d5;display:inline-block;padding:15px 30px;border-radius:40px;color:#fff;font-weight:700;-webkit-box-shadow:0px 4px 15px -5px #0046d5;box-shadow:0px 4px 15px -5px #0046d5;}", "@media only screen and (max-width:767px){.notfound.jsx-1429454970 .notfound-404.jsx-1429454970{height:142px;}.notfound.jsx-1429454970 .notfound-404.jsx-1429454970 h1.jsx-1429454970{font-size:112px;}}"]));
}

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gwpy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_NewsCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6LZC");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function LatestNews() {
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}, {}, {}, {}, {}]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function getNews() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=5&_embed', {
      params: {
        token: '437214169d9be2a73e91d22f76f68b52'
      }
    }).then(res => {
      setNews(res.data);
      setLoaded(true);
    }).catch(err => console.log('Error in Live News' + err.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getNews();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "sidebar-widget trend-widget"
  }, __jsx("h4", {
    className: "heading-title"
  }, "Latest News"), __jsx("nav", null, __jsx("ul", null, news.map((news, index) => __jsx(_Components_NewsCards__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    key: index,
    format: "small-side",
    headline: loaded ? news.title.rendered : null,
    thumbnail: loaded ? news._embedded['wp:featuredmedia'][0].source_url : null,
    id: news.id,
    slug: news.slug
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/news"
  }, __jsx("a", {
    className: "ld-more-btn"
  }, " Load More"))));
}

/* harmony default export */ __webpack_exports__["a"] = (LatestNews);

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nOYO":
/***/ (function(module, exports) {

module.exports = require("he");

/***/ }),

/***/ "siz1":
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "tvFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Advertisement(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.size === 970 ? __jsx("div", {
    style: props.style
  }, __jsx("img", {
    src: "/advertisement/ad-970x90.png",
    alt: "ad",
    style: props.imgstyle
  })) : props.size === 728 ? __jsx("div", {
    style: props.style
  }, __jsx("img", {
    src: "/advertisement/ad-728x90.png",
    alt: "ad",
    style: props.imgstyle
  })) : props.size === 32050 ? __jsx("div", {
    style: props.style
  }, __jsx("img", {
    src: "/advertisement/ad-320x50.png",
    alt: "ad",
    style: props.imgstyle
  })) : props.size === 320100 ? __jsx("div", {
    style: props.style
  }, __jsx("img", {
    src: "/advertisement/ad-320x100.png",
    alt: "ad",
    style: props.imgstyle
  })) : props.size === 46860 ? __jsx("div", {
    style: props.style
  }, __jsx("img", {
    src: "/advertisement/ad-468x60.png",
    alt: "ad",
    style: props.imgstyle
  })) : props.size === 72890 ? __jsx("div", {
    style: props.style
  }, __jsx("img", {
    src: "/advertisement/ad-728x90.png",
    alt: "ad",
    style: props.imgstyle
  })) : null);
}

/* harmony default export */ __webpack_exports__["a"] = (Advertisement);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xXj+":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });