"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={slug:"introducing-echo",title:"Introducing Echo: The Comprehensive Builder API",authors:["nicolas"],tags:["ethereum","pbs","mev"]},i=void 0,s={permalink:"/blog/introducing-echo",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-27-echo-introduction/index.md",source:"@site/blog/2023-11-27-echo-introduction/index.md",title:"Introducing Echo: The Comprehensive Builder API",description:"In the realm of on-chain trading, where speed and efficiency are critical, Echo emerges as a pivotal tool. Developed as an aggregated builder API, Echo is tailored for MEV searchers, quant shops, bot operators and blockchain hedge funds alike. It was born out of specific requests from the customers of Fiber, our low-latency Ethereum mempool streaming service.",date:"2023-11-27T00:00:00.000Z",formattedDate:"November 27, 2023",tags:[{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"pbs",permalink:"/blog/tags/pbs"},{label:"mev",permalink:"/blog/tags/mev"}],readingTime:5.955,hasTruncateMarker:!1,authors:[{name:"Nicolas Racchi",title:"Chainbound Engineer",url:"https://github.com/merklefruit",imageURL:"https://github.com/merklefruit.png",key:"nicolas"}],frontMatter:{slug:"introducing-echo",title:"Introducing Echo: The Comprehensive Builder API",authors:["nicolas"],tags:["ethereum","pbs","mev"]},prevItem:{title:"Echo Release V1.0: Now Globally Distributed",permalink:"/blog/echo-v1-release"}},l={authorsImageUrls:[void 0]},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Real-world usage examples",id:"real-world-usage-examples",level:2},{value:"1. Arbitrage trader",id:"1-arbitrage-trader",level:3},{value:"2. Bot operator",id:"2-bot-operator",level:3},{value:"3. Long-tail MEV searcher",id:"3-long-tail-mev-searcher",level:3},{value:"How to get started with Echo",id:"how-to-get-started-with-echo",level:2},{value:"What are the next steps?",id:"what-are-the-next-steps",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the realm of on-chain trading, where speed and efficiency are critical, Echo emerges as a pivotal tool. Developed as an aggregated builder API, Echo is tailored for MEV searchers, quant shops, bot operators and blockchain hedge funds alike. It was born out of specific requests from the customers of Fiber, our low-latency Ethereum mempool streaming service.")),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Echo is a drop-in replacement to the standard Flashbots RPC interface for sending MEV bundles and private transactions, while also bringing additional, advanced features to the table."),(0,o.kt)("p",null,"The extra features for sending a bundle include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mevBuilders"),": Choose exactly which block builders to target with your requests. This feature offers granular control over the trust assumptions that underpin the relationship between Searchers and Builders in the current PBS ecosystem. On top of that, we support a large list of builders with more than 96% coverage of PBS blocks, and we regularly maintain this set which you can always consult ",(0,o.kt)("a",{parentName:"li",href:"https://echo.chainbound.io/docs/usage/integrations"},"on our website"),". We monitor the space for new builders and onboard them quickly, given our flexible API interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"usePublicMempool"),": Specify if the transactions should also be forwarded to the public mempool. Under the hood, this functionality uses the Fiber Network to broadcast transactions to all of our nodes with the lowest possible latency. This is useful for operators that need to handle a lot of transactions that don\u2019t generate MEV, such as ERC-20 approvals or simple transfers between EOAs. Additionally, more advanced searchers could use tools like the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chainbound/mevboost-relay-api"},"PBS Relay API")," to figure out if a slot will not be built by a MEV-boost enabled proposer and decide to directly bid in the public mempool instead."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awaitReceipt"),": Opt-in to receive an inclusion receipt in your HTTP responses. Under the hood, this is powered by Fiber\u2019s ",(0,o.kt)("inlineCode",{parentName:"li"},"new_beacon_blocks")," stream for the lowest latency possible. Receipts are extremely useful to understand if and when your trades are effectively included in a new block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retryUntil"),": MEV bundles only target a single block by default. By setting the retryUntil flag to a block number in the future, Echo will automatically re-send the bundle on each new block until it is either included on-chain or the target block is surpassed.")),(0,o.kt)("p",null,"If you are curious to learn more about each individual feature, check out ",(0,o.kt)("a",{parentName:"p",href:"https://echo.chainbound.io/docs/usage/api-interface#eth_sendbundle"},"our documentation"),"!"),(0,o.kt)("h2",{id:"real-world-usage-examples"},"Real-world usage examples"),(0,o.kt)("p",null,"We prepared example scripts that you can use to get started. Let\u2019s explore some real examples of how you can use Echo as a MEV player today!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chainbound/echo-usage-examples/"},"Example scripts repository")," (Typescript and Rust)")),(0,o.kt)("h3",{id:"1-arbitrage-trader"},"1. Arbitrage trader"),(0,o.kt)("p",null,"If you are a searcher focusing on short-tail arbitrage on DEXs, you are likely performing backruns on users trades and will need to send bundles to preserve the correct ordering of the target and your transaction. In this case, it would be useful to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"retryUntil")," flag to a couple blocks in the future, just in case the opportunity is not mined in the next block (for instance, if the next block turns out not to be mev-boost enabled)."),(0,o.kt)("p",null,"Additionally, with ",(0,o.kt)("inlineCode",{parentName:"p"},"awaitReceipt")," you will immediately know when your backruns landed and can manage token inventory to your EOA without having to perform any additional requests!"),(0,o.kt)("p",null,"Here\u2019s how the request looks like (in typescript):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const bundle = {\n  // insert raw transactions inside the bundle\n  txs: [toHexString(tx.serialize()), backrunRawSigned],\n  blockNumber: nextBlockNumber,\n  usePublicMempool: false,\n  awaitReceipt: true,\n  awaitReceiptTimeoutMs: 60_000,\n  mevBuilders: ["titan", "rsync", "beaverbuild"],\n};\n\nconst rpcRequest = JSON.stringify({\n  id: 1,\n  jsonrpc: "2.0",\n  method: "eth_sendBundle",\n  params: [bundle],\n});\n\n// listen for receipt notifications from Echo\nechoClient.on("message", async (data: Buffer) => {\n  let text = data.toString("utf-8");\n  console.log("Received message from Echo:", text);\n});\n\nechoClient.send(rpcRequest);\n')),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chainbound/echo-usage-examples/blob/main/typescript/uniswap_arb.ts"},"full typescript example here"),", and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chainbound/echo-usage-examples/blob/main/rust/uniswap_arb.rs"},"Rust version here")," as well."),(0,o.kt)("h3",{id:"2-bot-operator"},"2. Bot operator"),(0,o.kt)("p",null,"If you are building a bot that needs to manage different users\u2019 wallets, chances are that you will have to send a lot of transactions just to setup trading in the form of ERC20 approvals. This is where you could use Echo\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"usePublicMempool")," functionality to lower the inclusion time of the transactions that don\u2019t include any MEV."),(0,o.kt)("p",null,"Over time, if you obtain enough orderflow, you might want to limit the target block builders to a handful of trusted ones that could potentially offer you services in exchange for an exclusivity deal with them. With Echo, all you have to do is add the ",(0,o.kt)("inlineCode",{parentName:"p"},"mevBuilders")," flag to the array of the selected builders to only forward the orderflow to them."),(0,o.kt)("p",null,"Here\u2019s how the request looks like (in typescript):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// We will send the approval transaction to the public mempool as a\n// separate request, as it doesn\'t contain any MEV.\nconst approvalTxPayload = {\n  tx: erc20ApprovalRawSigned,\n  usePublicMempool: true,\n  awaitReceipt: true,\n  awaitReceiptTimeoutMs: 20_000,\n};\n\nconst rpcRequest = JSON.stringify({\n  id: 1,\n  jsonrpc: "2.0",\n  method: "eth_sendPrivateRawTransaction",\n  params: [approvalTxPayload],\n});\n\n// listen for receipt notifications from Echo\nechoClient.on("message", async (data: Buffer) => {\n  let text = data.toString("utf-8");\n  console.log("Received message from Echo:", text);\n});\n\nconsole.log("Sending transaction to Echo:", rpcRequest);\nechoClient.send(rpcRequest);\n\n// create a fictional erc20 user swap tx (sending 42 wei to ourselves)\n// for demo purposes\nconst erc20UserSwap = await walletClient.prepareTransactionRequest({\n  to: account.address,\n  value: BigInt(69),\n});\nconst erc20UserSwapRawSigned = await walletClient.signTransaction(\n  erc20UserSwap\n);\n\n// Send this swap as a private transaction, skipping the public mempool.\nconst privateTxPayload = {\n  txs: [erc20UserSwapRawSigned],\n  usePublicMempool: false,\n  awaitReceipt: true,\n  awaitReceiptTimeoutMs: 60_000,\n  mevBuilders: ["titan", "rsync", "beaverbuild"],\n};\n\nconst rpcRequest2 = JSON.stringify({\n  id: 2,\n  jsonrpc: "2.0",\n  method: "eth_sendPrivateRawTransaction",\n  params: [privateTxPayload],\n});\n\nconsole.log("Sending private transaction to Echo:", rpcRequest2);\nechoClient.send(rpcRequest2);\n')),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chainbound/echo-usage-examples/blob/main/typescript/telegram_bot.ts"},"full typescript example here"),", and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chainbound/echo-usage-examples/blob/main/rust/telegram_bot.rs"},"Rust version here")," as well."),(0,o.kt)("h3",{id:"3-long-tail-mev-searcher"},"3. Long-tail MEV searcher"),(0,o.kt)("p",null,"If you are targeting opportunities that are rare and highly profitable like exotic liquidations, generalised mempool frontrunning, NFT flash loans or similar, it\u2019s crucial that you target an amount of builders that guarantees high inclusion rate. A possible optimisation could be to use a dynamic list of block builders depending on the size of the MEV opportunity. In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"retryUntil")," could also be beneficial in case the next block happens to be reorged."),(0,o.kt)("h2",{id:"how-to-get-started-with-echo"},"How to get started with Echo"),(0,o.kt)("p",null,"Echo is free and it\u2019s very simple to get started. If you are already familiar with sending MEV bundles, you can just take a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://echo.chainbound.io/docs/usage/api-interface"},"integration docs"),". If you\u2019ve never sent a bundle or transaction to a block builder before, that\u2019s also fine! We support users through onboarding on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/76GtgBGhQE"},"Discord"),", where we will provide you with a free API key and are available for any support question."),(0,o.kt)("h2",{id:"what-are-the-next-steps"},"What are the next steps?"),(0,o.kt)("p",null,"Echo is always evolving. We have a lot of ideas for our roadmap, but we are focusing on 2 things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Making Echo the lowest latency inclusion service on Ethereum: the major goal for the next few weeks will be to distribute Echo globally with different points of presence to guarantee lower latency to builders located in different countries."),(0,o.kt)("li",{parentName:"ol"},"Building more features based on our users feedback: EVM Simulations, MEV kickback, a Metamask-compatible RPC endpoint are just some of the items we\u2019re exploring. If you have specific requests, we encourage you to join our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/76GtgBGhQE"},"Discord")," and chat with us!")))}d.isMDXComponent=!0}}]);