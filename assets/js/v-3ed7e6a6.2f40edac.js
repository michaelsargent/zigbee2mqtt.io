"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48478],{17147:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-3ed7e6a6",path:"/devices/GL-SD-002.html",title:"Gledopto GL-SD-002 control via MQTT",lang:"en-US",frontmatter:{title:"Gledopto GL-SD-002 control via MQTT",description:"Integrate your Gledopto GL-SD-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-12-31T16:51:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GL-SD-002.md",git:{updatedTime:1645876208e3}}},80727:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const d=(0,o(66252).uE)('<h1 id="gledopto-gl-sd-002" tabindex="-1"><a class="header-anchor" href="#gledopto-gl-sd-002" aria-hidden="true">#</a> Gledopto GL-SD-002</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GL-SD-002</td></tr><tr><td>Vendor</td><td>Gledopto</td></tr><tr><td>Description</td><td>Zigbee 3.0 smart home switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GL-SD-002.jpg" alt="Gledopto GL-SD-002"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),i={},a=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);