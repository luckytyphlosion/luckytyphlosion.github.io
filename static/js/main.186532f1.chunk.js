(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{20:function(e,t,r){e.exports=r(30)},29:function(e,t,r){var a={"./AnalyzeSourceProj":[15,0],"./AnalyzeSourceProj.jsx":[15,0],"./AutoTTRecorderGUIProj":[16,1],"./AutoTTRecorderGUIProj.jsx":[16,1],"./AutoTTRecorderProj":[17,2],"./AutoTTRecorderProj.jsx":[17,2],"./AutoTTRecorderYTProj":[18,3],"./AutoTTRecorderYTProj.jsx":[18,3],"./GnuAssemblerProj":[19,4],"./GnuAssemblerProj.jsx":[19,4]};function n(e){var t=a[e];return t?r.e(t[1]).then(function(){var e=t[0];return r(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(a)},n.id=29,e.exports=n},30:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),o=r(14),c=r.n(o),l=r(7);var u=function(){return n.a.createElement("div",null,n.a.createElement(l.b,{to:"/"},"Home"),n.a.createElement(l.b,{to:"/projects"},"Projects"),n.a.createElement(l.b,{to:"/about"},"About"))},s=r(0);var i=function(){return n.a.createElement("div",null,n.a.createElement("p",null,"My website. You can take a look at some of my projects, or read about me."))};var m=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About me"),n.a.createElement("p",null,"Hi, my online handle is luckytyphlosion. I\u2019m a programmer fluent in Python, Java, and C. I also am fluent in the Game Boy assembly language GBZ80. My programming projects usually revolve around making tools for the video game communities I\u2019m in, whether the tools are for myself or for the community. Much of my projects have been related to reverse engineering the generation 1-3 series of Pok\xe9mon and Mega Man Battle Network, however in recent years I\u2019ve started to branch out into web development to broaden my skills."))},j=r(6),d=r(8),b=r(10),v=r(5),E=r(9),h=r(12),p=function(e){function t(e){var r;Object(j.a)(this,t);return(r=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={curProject:""},r.setProjectView=r.setProjectView.bind(Object(h.a)(Object(h.a)(r))),r}return Object(E.a)(t,e),Object(d.a)(t,[{key:"setProjectView",value:function(e){var t=n.a.lazy(function(){return r(29)("./".concat(e.target.value))});this.setState({curProject:n.a.createElement(t,null)})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AnalyzeSourceProj"},"analyze-source"),n.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"GnuAssemblerProj"},"agbasm (GNU Assembler Modifications)"),n.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AutoTTRecorderProj"},"Auto-TT-Recorder"),n.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AutoTTRecorderYTProj"},"CTGP Legacy Records"),n.a.createElement("button",{className:"project-button",onClick:this.setProjectView,value:"AutoTTRecorderGUIProj"},"Auto-TT-Recorder GUI")),n.a.createElement("div",{id:"project-view"},n.a.createElement(a.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},this.state.curProject)))}}]),t}(n.a.Component);var P=function(){return n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",element:n.a.createElement(i,null)}),n.a.createElement(s.a,{exact:!0,path:"/projects",element:n.a.createElement(p,null)}),n.a.createElement(s.a,{exact:!0,path:"/about",element:n.a.createElement(m,null)}))};var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(P,null))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,null,n.a.createElement(f,null))))}},[[20,7,6]]]);
//# sourceMappingURL=main.186532f1.chunk.js.map