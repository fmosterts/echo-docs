"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(r,".").concat(p)]||d[p]||h[p]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:1,title:"API Interface"},o=void 0,l={unversionedId:"usage/api-interface",id:"usage/api-interface",title:"API Interface",description:"Echo supports the same API interface as the Flashbots RPC, with additional features which are defined below.",source:"@site/docs/3-usage/1-api-interface.md",sourceDirName:"3-usage",slug:"/usage/api-interface",permalink:"/docs/usage/api-interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-usage/1-api-interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"API Interface"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/architecture"},next:{title:"Integrations",permalink:"/docs/usage/integrations"}},r={},u=[{value:"Authentication",id:"authentication",level:2},{value:"Flashbots Authentication",id:"flashbots-authentication",level:2},{value:"Available Methods",id:"available-methods",level:2},{value:"<code>eth_sendBundle</code>",id:"eth_sendbundle",level:2},{value:"Successful response",id:"successful-response",level:3},{value:"Receipt Notification",id:"receipt-notification",level:3},{value:"<code>eth_cancelBundle</code>",id:"eth_cancelbundle",level:2},{value:"Successful response",id:"successful-response-1",level:3},{value:"<code>eth_sendPrivateRawTransaction</code>",id:"eth_sendprivaterawtransaction",level:2},{value:"<code>echo_status</code>",id:"echo_status",level:2},{value:"<code>echo_getBundleStats</code>",id:"echo_getbundlestats",level:2},{value:"Successful response",id:"successful-response-2",level:3},{value:"<code>echo_getInclusionStats</code>",id:"echo_getinclusionstats",level:2},{value:"Successful response",id:"successful-response-3",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Echo supports the same API interface as the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/rpc-endpoint"},"Flashbots RPC"),", with additional features which are defined below."),(0,i.kt)("p",null,"The Echo API is available in both HTTP and Websocket flavors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The HTTP API entrypoint is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://echo-rpc.chainbound.io/"),"."),(0,i.kt)("li",{parentName:"ul"},"The Websocket API entrypoint is ",(0,i.kt)("inlineCode",{parentName:"li"},"wss://echo-rpc.chainbound.io/ws"),".")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Echo uses the same authentication mechanism as ",(0,i.kt)("a",{parentName:"p",href:"https://fiber.chainbound.io"},"Fiber"),". To use the API, you must specify a valid API key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-api-key")," header of your request. You can obtain a free API key by reaching out to us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:admin@chainbound.io"},"admin@chainbound.io")," or by joining our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/J4KNdeCYGX"},"Discord")," and opening a ticket."),(0,i.kt)("p",null,"You can test the authentication from your terminal as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# HTTP\ncurl https://echo-rpc.chainbound.io -X POST -H "x-api-key: <YOUR_API_KEY>" -H "Content-Type: application/json" -d \'{"id":1,"jsonrpc":"2.0","method":"echo_status","params":[]}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Websocket\nwscat -c wss://echo-rpc.chainbound.io/ws -H "x-api-key: <YOUR_API_KEY>" -x \'{"id":1,"jsonrpc":"2.0","method":"echo_status","params":[]}\n')),(0,i.kt)("h2",{id:"flashbots-authentication"},"Flashbots Authentication"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Additionally to an API key, you may also specify a Flashbots signature token in the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-flashbots-signature")," header of your HTTP requests. Echo will automatically forward the signature to the builders that support it, so that you can focus on your strategies and not worry about the details of each builder's API. For more details on the Flashbots signature, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/rpc-endpoint#authentication"},"Flashbots documentation"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are using Echo via Websocket, you have to specify this field in the message body instead.\nThis is done by encapsulating your existing request (the entire JSON-RPC object) in a new JSON object,\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-flashbots-signature")," field as a sibling of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," field. Here is an example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "x-flashbots-signature": "0x...:0x...",\n  "payload": {\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "eth_sendBundle",\n    "params": [\n      {\n        "txs": ["0x..."],\n        "blockNumber": "0x1234"\n      }\n    ]\n  }\n}\n'))),(0,i.kt)("h2",{id:"available-methods"},"Available Methods"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#eth_sendbundle"},"eth_sendBundle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#eth_cancelbundle"},"eth_cancelBundle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#eth_sendprivaterawtransaction"},"eth_sendPrivateRawTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#echo_status"},"echo_status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#echo_getbundlestats"},"echo_getBundleStats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#echo_getinclusionstats"},"echo_getInclusionStats"))),(0,i.kt)("h2",{id:"eth_sendbundle"},(0,i.kt)("inlineCode",{parentName:"h2"},"eth_sendBundle")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Users can send bundles via the ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," method with this interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendBundle",\n  "params": [\n    {\n      txs,                   // Array[String], A list of signed transactions to execute in an atomic bundle\n      blockNumber,           // String, a hex encoded block number for which this bundle is valid on\n      minTimestamp,          // (Optional) Number, the minimum timestamp (in seconds) for which this bundle is valid\n      maxTimestamp,          // (Optional) Number, the maximum timestamp (in seconds) for which this bundle is valid\n      revertingTxHashes,     // (Optional) Array[String], A list of tx hashes that are allowed to revert\n      replacementUuid,       // (Optional) String, UUIDv4 that can be used to cancel/replace this bundle\n      refundPercent,         // (Optional) Number, the percentage (from 0 to 100) of the  ETH reward of the last transaction,\n                             //   or the transaction specified by refundIndex, that should be refunded back to the \u2018refundRecipient\u2019\n      refundIndex,           // (Optional) Number, the index of the transaction of which the ETH reward should be refunded.\n                             //   Default, last transaction in the bundle\n      refundRecipient,       // (Optional) Address, the address that will receive the ETH refund.\n                             //   Default, sender of the first transaction in the bundle\n      mevBuilders,           // (Optional) Array[String], A list of mev builders to send this bundle to.\n                             //   If not specified, the bundle will be sent to all available builders\n      usePublicMempool,      // (Optional) Boolean, If true, the bundle will also be propagated to the public mempool\n                             //   through Fiber\'s internal network. Defaults to false.\n                             //   WARNING: Using this flag will void the privacy guarantees of the bundle, making it\n                             //   frontrunnable by anyone else, including other MEV searchers.\n      awaitBuilderResponses, // (Optional) Boolean, If true, the HTTP request will hang until all builders have\n                             //   responded, and the result will contain a `builderResponses` field. Defaults to false.\n      awaitReceipt,          // (Optional) Boolean, If true, the HTTP request will hang until the bundle is either\n                             //   included in a block, or the specified timeout is reached. Defaults to false.\n      awaitReceiptTimeoutMs, // (Optional) Number, The timeout (in milliseconds) for the awaitReceipt flag.\n                             //   Defaults to 30000 (30 seconds) if not specified and awaitReceipt is true.\n    }\n  ]\n}\n')),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"usePublicMempool")," flag will void the privacy guarantees of the bundle, making it frontrunnable by anyone else, including other MEV searchers. Use it only to send bundles that are not vulnerable to frontrunning.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"awaitBuilderResponses")," flag can be very useful during testing & debugging, as it allows you to see the response from each builder. If for some reason some builders are returning an error, you can easily identify them and fix the issue. It's recommended to set this flag\nto false in production, as it will slow down the API response time significantly.")),(0,i.kt)("h3",{id:"successful-response"},"Successful response"),(0,i.kt)("p",null,"Here is the successful response format that you can expect from the API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "123",\n  "result": {\n    bundleHash,          // String, a unique 256-bit bundle identifier, based its payload.\n    receiptNotification, // (Optional) object containing the on-chain receipt of the bundle.\n                         //   This field will only be present if you specified the `awaitReceipt` flag\n                         //   in the request.\n    builderResponses,    // (Optional) object containing the various builder responses as a key-value map,\n                         //   with the key being the builder name, and the value being the response from that builder.\n                         //   This field will only be present if you specified the `awaitBuilderResponses` flag\n                         //   in the request.\n  }\n}\n')),(0,i.kt)("h3",{id:"receipt-notification"},"Receipt Notification"),(0,i.kt)("p",null,"If you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"awaitReceipt")," flag to ",(0,i.kt)("strong",{parentName:"p"},"true")," in the request params,\nthe response will also include the ",(0,i.kt)("inlineCode",{parentName:"p"},"receiptNotification")," field, which will be one of the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // ...,\n  "receiptNotification": {\n    status: "included" | "timedOut", // "included" if the bundle was included in a block, "timedOut" if the\n                                     // "awaitReceiptTimeoutMs" (default: 30s) was reached without inclusion.\n    data: {\n      blockNumber, // Number, the block number in which the bundle was included. Only present if status == "included"\n      elapsedMs    // Number, the time (in milliseconds) since the bundle was submitted. Always present.\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"eth_cancelbundle"},(0,i.kt)("inlineCode",{parentName:"h2"},"eth_cancelBundle")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Echo allows users to cancel pending bundles by submitting a cancellation request via the ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_cancelBundle")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_cancelBundle",\n  "params": [\n    {\n      replacementUuid, // UUIDv4 to uniquely identify submission\n      mevBuilders      // (Optional) Array[String], A list of mev builders to send the cancel request to.\n                       //   If not specified, the cancelBundle request will be sent only to the builders\n                       //   that were originally specified when the bundle was submitted with `eth_sendBundle`\n    }\n  ]\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"replacementUuid")," field must have been set when the bundle was originally submitted with ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sendBundle"),".")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"You cannot specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"replacementUuid")," together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"usePublicMempool")," flag,\nas transactions sent to the public mempool can always be included by anyone.")),(0,i.kt)("h3",{id:"successful-response-1"},"Successful response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "123",\n  "result": true  // Boolean, true if the cancellation request was successfully sent to block builders\n}\n')),(0,i.kt)("h2",{id:"eth_sendprivaterawtransaction"},(0,i.kt)("inlineCode",{parentName:"h2"},"eth_sendPrivateRawTransaction")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Echo allows users to send private transactions via the ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sendPrivateRawTransaction")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendPrivateRawTransaction",\n  "params": [\n    {\n      tx,            // String, the signed private transaction to execute\n      mevBuilders,   // (Optional) Array[String], A list of mev builders to send this transaction to.\n                     //   If not specified, the transaction will be sent to all available builders\n    }\n  ]\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can also omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," object in the request and just include the signed transaction as a hex string like so:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendPrivateRawTransaction",\n  "params": [\n    "0x..." // String, the signed private transaction to execute\n  ]\n}\n')),(0,i.kt)("p",{parentName:"admonition"},"In this case, the transaction will be forwarded to all available builders that support receiving private transactions.")),(0,i.kt)("h2",{id:"echo_status"},(0,i.kt)("inlineCode",{parentName:"h2"},"echo_status")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This endpoint can be used to fetch information about the status of the Echo API.\nThis is mainly useful for testing your API key and connectivity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "echo_status",\n  "params": [\n    {} // Empty object\n  ]\n}\n')),(0,i.kt)("h2",{id:"echo_getbundlestats"},(0,i.kt)("inlineCode",{parentName:"h2"},"echo_getBundleStats")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This endpoint can be used to fetch information about a specific bundle sent to Echo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "echo_getBundleStats",\n  "params": [\n    {\n      bundleHash, // String, the bundle hash of the bundle you want to get stats for\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"successful-response-2"},"Successful response"),(0,i.kt)("p",null,"Here is the successful response format that you can expect from the API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": {\n    [\n      {\n        bundleHash,  // String, the bundle hash of the bundle you requested stats for\n        included,    // Boolean, true if the bundle was included in a block, false otherwise\n        timestamp,   // Number, the timestamp (in milliseconds) when the bundle was included in a block\n        blockNumber, // Number, the block number in which the bundle was included\n        blockBuilder // String, the name of the builder that included the bundle\n      },\n      ...            // Additional bundles with the same bundleHash can be returned if they exist\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"echo_getinclusionstats"},(0,i.kt)("inlineCode",{parentName:"h2"},"echo_getInclusionStats")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This endpoint can be used to fetch information about the inclusion details of the bundles you send through Echo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "echo_getInclusionStats",\n  "params": [\n    {} // Empty object\n  ]\n}\n')),(0,i.kt)("h3",{id:"successful-response-3"},"Successful response"),(0,i.kt)("p",null,"Here is the successful response format that you can expect from the API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": {\n    avgInclusionDelay,   // Number, the average delay (in milliseconds) between bundle submission and inclusion in a block\n    inclusionRate,       // Number, the ratio of bundles sent through Echo that were included in a block\n    bundlesIncludedByBuilder: [\n      {\n        blockBuilder,    // String, the name of the builder\n        bundlesIncluded, // Number, the number of bundles included by this builder\n      },\n      ...                // Each builder that included at least one of your bundles will be returned\n    ]\n  }\n}\n')))}h.isMDXComponent=!0}}]);