(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 4283:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "meetupDetail_detail__8B_40"
};


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./components/meetups/meetupDetail.module.css
var meetupDetail_module = __webpack_require__(4283);
var meetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(meetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


function MeetupDetail(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (meetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js




function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.MeetupDeta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.MeetupDeta.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                image: props.MeetupDeta.image,
                title: props.MeetupDeta.title,
                address: props.MeetupDeta.address,
                description: props.MeetupDeta.description
            })
        ]
    });
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://erinyanis88:I0UKGrQgupZ7KH63@cluster0.xqqqasz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    // fetch data
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://erinyanis88:I0UKGrQgupZ7KH63@cluster0.xqqqasz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    // Corrected the ObjectId instantiation
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            MeetupDeta: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.data.title,
                address: selectedMeetup.data.address,
                image: selectedMeetup.data.image,
                description: selectedMeetup.data.description
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();