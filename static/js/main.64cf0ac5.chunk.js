(this.webpackJsonplearning=this.webpackJsonplearning||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),i=n(9),a=n.n(i),o=(n(16),n(10)),c=n(2),u=n(3),l=n(5),h=n(4),b=n(0),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("button",{className:"square",style:this.props.should_highlight?{backgroundColor:"lime"}:{},onClick:function(){e.props.onClick()},children:this.props.value})}}]),n}(r.Component),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(b.jsx)(d,{value:this.props.squares[e],onClick:function(){t.props.onClick(e)},should_highlight:!(null===this.props.winningSquares||!this.props.winningSquares.includes(e))},e)}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++){for(var n=[],r=0;r<3;r++)n.push(this.renderSquare(3*t+r));e.push(Object(b.jsx)("div",{className:"board-row",children:n},t))}return e}}]),n}(r.Component),j=n(11);var v=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(j.a)(t[n],3),s=r[0],i=r[1],a=r[2];if(e[s]&&e[s]===e[i]&&e[s]===e[a]){var o=[s,i,a];return{winner:e[s],winningSquares:o}}}return{winner:null,winningSquares:null}},g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={history:[{squares:Array(9).fill(null),position:null,move_number:0}],x_is_next:!0,move_number:0,historyOrder:"ascending"},e.handleClick=function(t){var n=e.state.history.slice(0,e.state.move_number+1),r=n[n.length-1],s=Object(o.a)(r.squares);if(null==v(s).winner&&!s[t]){s[t]=e.state.x_is_next?"X":"O";var i={row:Math.floor(t/3)+1,col:t%3+1};e.setState({history:n.concat({squares:s,position:i,move_number:n.length}),move_number:n.length,x_is_next:!e.state.x_is_next})}},e.jumpTo=function(t){e.setState({move_number:t,x_is_next:t%2===0})},e.handleToggle=function(){var t="ascending"===e.state.historyOrder?"descending":"ascending";e.setState({historyOrder:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t="ascending"===this.state.historyOrder?this.state.history:JSON.parse(JSON.stringify(this.state.history)).reverse(),n=this.state.history[this.state.move_number],r=t.map((function(t,n){var r=0===t.move_number?"Go to game start":"Go to move #"+t.move_number+": "+(t.move_number%2===0?"O":"X")+" at row "+t.position.row+", col "+t.position.col;return Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){e.jumpTo(t.move_number)},className:t.move_number===e.state.move_number?"curr-move":"",children:r})},n)})),s=v(n.squares),i=s.winner?"Winner: "+s.winner:9===this.state.move_number?"Draw":"Next player: "+(this.state.x_is_next?"X":"O");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"title",children:"React Tic-Tac-Toe"}),Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("div",{className:"game-board",children:Object(b.jsx)(m,{winningSquares:s.winningSquares,squares:n.squares,onClick:function(t){return e.handleClick(t)}})}),Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{children:i}),Object(b.jsxs)("p",{children:["Current history order: ",this.state.historyOrder]}),Object(b.jsx)("button",{onClick:this.handleToggle,className:"toggle-btn",children:"Toggle History Order"}),Object(b.jsx)("ol",{children:r})]})]})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.64cf0ac5.chunk.js.map