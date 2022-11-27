(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(17),c=a.n(o),i=a(15);t.default=function(){return r.a.createElement("div",{className:"project-content"},r.a.createElement("h1",{className:"project-header"},"analyze-source"),r.a.createElement("div",{className:"project-description"},r.a.createElement(i.a,{width:"50%",src:c.a,alt:"Sample output of analyze-source"}),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dism-exe/bn6f/tree/master/tools/analyze_source"},"GitHub link")),r.a.createElement("p",null,"During 2019, I was working on a source recreation of a Game Boy Advance game called Mega Man Battle Network 6, which was written in ARM7TDMI assembly. Part of that process involves documenting the extracted assembly. I created a program that would automatically replace the raw numbers associated with struct accesses with variable names. This ends up being a non-trivial task as in assembly, there\u2019s no way to know the specific type of a register on its own; so instead context from the entire function has to be used. The program will do a static trace from a starting function, using inference rules to determine the type of a register each time it is modified with a new value. For example, reading from a specific part of memory into register r0, where that memory is marked as containing a BattleObject type would set a register r0 to a BattleObject type."),r.a.createElement("p",null,"The project overall required deep knowledge of core Python features and programming techniques such as string parsing and manipulation, regex, data structure manipulation, and object oriented programming.")))}},,function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(9),c=a(5),i=a(8),l=a(10),s=a(1),u=a.n(s),m=(a(39),function(e){function t(e){var a;Object(n.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var r={initialWidth:e.width,fullWidth:void 0!==e.fullWidth?e.fullWidth:"100%",width:e.width,src:e.src,alt:e.alt};return a.state=r,a.setWidth=a.setWidth.bind(Object(l.a)(Object(l.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"setWidth",value:function(e){this.setState(function(e,t){return{width:e.width===e.fullWidth?e.initialWidth:e.fullWidth}})}},{key:"render",value:function(){return u.a.createElement("img",{className:"clickable",width:this.state.width,onClick:this.setWidth,src:this.state.src,alt:this.state.alt})}}]),t}(u.a.Component));t.a=m},,function(e,t,a){e.exports=a.p+"static/media/analyze-source-demo.26660386.png"},,,,,function(e,t,a){e.exports=a(48)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){var n={"./AnalyzeSourceProj":[13],"./AnalyzeSourceProj.jsx":[13],"./AutoTTRecorderGUIProj":[18,0],"./AutoTTRecorderGUIProj.jsx":[18,0],"./AutoTTRecorderProj":[19,1],"./AutoTTRecorderProj.jsx":[19,1],"./AutoTTRecorderYTProj":[20,2],"./AutoTTRecorderYTProj.jsx":[20,2],"./GnuAssemblerProj":[21,3],"./GnuAssemblerProj.jsx":[21,3]};function r(e){var t=n[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id=43,e.exports=r},function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(16),c=a.n(o),i=a(11);a(31);var l=function(){return r.a.createElement("div",{id:"navbar-container"},r.a.createElement("div",{id:"navbar-content"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/projects"},"Projects"),r.a.createElement(i.b,{to:"/about"},"About")))},s=a(0);a(33),a(35);var u=function(){return r.a.createElement("div",{className:"home-page-body"},r.a.createElement("p",null,"My website. You can take a look at some of my projects, or read about me."))};a(37);var m=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"about-header"},"About me"),r.a.createElement("p",{className:"about-page-body"},"Hi, my online handle is luckytyphlosion. I\u2019m a programmer fluent in Python, Java, and C. I also am fluent in the Game Boy assembly language GBZ80. My programming projects usually revolve around making tools for the video game communities I\u2019m in, whether the tools are for myself or for the community. Much of my projects have been related to reverse engineering the generation 1-3 series of Pok\xe9mon and Mega Man Battle Network, however in recent years I\u2019ve started to branch out into web development to broaden my skills."))},d=a(6),h=a(7),f=a(9),p=a(5),b=a(8),j=a(10),v=a(13),w=(a(41),function(e){function t(e){var a;Object(d.a)(this,t),a=Object(f.a)(this,Object(p.a)(t).call(this,e));var n={curProject:r.a.createElement(v.default,null)};return a.state=n,a.setProjectView=a.setProjectView.bind(Object(j.a)(Object(j.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setProjectView",value:function(e){var t=r.a.lazy(function(){return a(43)("./".concat(e.target.value))});this.setState({curProject:r.a.createElement(t,null)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"project-buttons"},r.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AnalyzeSourceProj"},"analyze-source"),r.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"GnuAssemblerProj"},"agbasm (GNU Assembler Modifications)"),r.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AutoTTRecorderProj"},"Auto-TT-Recorder"),r.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AutoTTRecorderYTProj"},"CTGP Legacy Records"),r.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AutoTTRecorderGUIProj"},"Auto-TT-Recorder GUI")),r.a.createElement("div",{id:"project-view"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},this.state.curProject)))}}]),t}(r.a.Component));var E=function(){return r.a.createElement("div",{id:"main-content"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",element:r.a.createElement(u,null)}),r.a.createElement(s.a,{exact:!0,path:"/projects",element:r.a.createElement(w,null)}),r.a.createElement(s.a,{exact:!0,path:"/about",element:r.a.createElement(m,null)})))};a(44);var y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{id:"app-content"},r.a.createElement(l,null),r.a.createElement(E,null)))};a(46);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(y,null))))}],[[22,6,5]]]);
//# sourceMappingURL=main.a461dd04.chunk.js.map