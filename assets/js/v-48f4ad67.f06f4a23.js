"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[70348],{80101:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-48f4ad67",path:"/devices/WXCJKG13LM.html",title:"Xiaomi WXCJKG13LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi WXCJKG13LM control via MQTT",description:"Integrate your Xiaomi WXCJKG13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-12-15T17:27:48.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing Instructions",slug:"pairing-instructions",children:[]},{level:3,title:"Binding",slug:"binding",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Operation_mode (enum)",slug:"operation-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WXCJKG13LM.md",git:{updatedTime:1645876208e3}}},84136:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var i=o(66252);const d=(0,i.uE)('<h1 id="xiaomi-wxcjkg13lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-wxcjkg13lm" aria-hidden="true">#</a> Xiaomi WXCJKG13LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WXCJKG13LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara Opple switch 3 bands</td></tr><tr><td>Exposes</td><td>battery, action, operation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WXCJKG13LM.jpg" alt="Xiaomi WXCJKG13LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing-instructions" tabindex="-1"><a class="header-anchor" href="#pairing-instructions" aria-hidden="true">#</a> Pairing Instructions</h3><p>Press and hold the button on the backside of the device until the blue light starts blinking, release it and the pairing should begin.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.</p><p>First unbind it from the coordinator, then you can bind it to any other device or group. (see ../guide/usage/binding.md )</p><p>Now change the operation mode of the device, by default it is in <code>event</code> mode, but when binding we need to change it to <code>command</code> mode. To do this send to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> payload <code>{&quot;operation_mode&quot;: &quot;command&quot;}</code>, right before doing this make sure to wakeup the device.</p><p>As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.</p><p>When bound to a lamp, the behavior is as follows (for WXCJKG11LM Aqara Opple switch 1 band):</p><ul><li>left click: turn off</li><li>right click: turn on</li><li>left double click: light dim down (by steps of 33%)</li><li>right double click: light dim up (by steps of 33%)</li><li>long left click: warm white</li><li>long right click: cold white</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',13),a=(0,i.Uk)("How to use device type specific configuration"),n=(0,i.uE)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_triple</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_triple</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_3_single</code>, <code>button_3_double</code>, <code>button_3_triple</code>, <code>button_4_hold</code>, <code>button_4_release</code>, <code>button_4_single</code>, <code>button_4_double</code>, <code>button_4_triple</code>, <code>button_5_hold</code>, <code>button_5_release</code>, <code>button_5_single</code>, <code>button_5_double</code>, <code>button_5_triple</code>, <code>button_6_hold</code>, <code>button_6_release</code>, <code>button_6_single</code>, <code>button_6_double</code>, <code>button_6_triple</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Operation mode, select &quot;command&quot; to enable bindings (wake up the device before changing modes!). Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),c={},l=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[a])),_:1})])]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);