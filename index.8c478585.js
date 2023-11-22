function t(t){return Number(t.dataset.salary.replace(/\D+/g,""))}var a,n=function t(a){!function(t,a){if(!(t instanceof a))throw TypeError("Cannot call a class as a function")}(this,t),this.name=a.innerText,this.position=a.dataset.position,this.salary=a.dataset.salary,this.age=a.dataset.age},e=document.querySelectorAll("li");!function(a){[].slice.call(a,0).sort(function(a,n){return t(n)-t(a)}).forEach(function(t){t.parentNode.append(t)})}(e),a=[],e.forEach(function(t){a.push(new n(t))});//# sourceMappingURL=index.8c478585.js.map

//# sourceMappingURL=index.8c478585.js.map
