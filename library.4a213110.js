!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired76b;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired76b=a),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.4a213110.js","jqQrI":"poster-plug.77123679.png","7J45r":"zdun.5b228a39.png"}'));var r,d=a("latFS");r=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("7J45r");var c='<div class=\'not-found_container\'>\n<h2 class="library_not-found-text">Are you serious? No movies have been added yet. \nOk, I\'ll wait. </br><a href="./index.html" class="link_to-home">Go home page.</a></h1>\n<img src="'.concat(t(r),'" width="400px" class=\'img_not-found\'>\n    </div>');function l(){document.querySelector(".films-catalog").innerHTML=c}var i=document.querySelector("#watched-btn"),s=document.querySelector("#queue-btn"),u=document.querySelector(".films-catalog");function m(){var t=localStorage.getItem("watched-movies"),e=JSON.parse(t);if(i.classList.add("library_btn--active"),s.classList.remove("library_btn--active"),e&&0!==e.length){var n=(0,d.default)(e);u.innerHTML=n}else l()}i.addEventListener("click",m);var v=a("hKHmD"),b=a("dDDEV"),y=(d=a("latFS"),document.querySelector(".films-catalog")),g=document.querySelector("#watched-btn"),f=document.querySelector("#queue-btn");function p(){var t=JSON.parse(localStorage.getItem("queued-movies"));g.classList.remove("library_btn--active"),f.classList.add("library_btn--active"),t&&0!==t.length?y.innerHTML=(0,d.default)(t):l()}f.addEventListener("click",p);var h,S=a("deuvv");h=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("jqQrI");var _,w=JSON.parse(localStorage.getItem("watched-movies")),L=document.querySelector("[data-queue]"),q=document.querySelector("[data-watch]");function E(){var e=JSON.parse(localStorage.getItem("Genre")),n=e.flatMap((function(t){return t.id})),o=e.flatMap((function(t){return t.name}));return n.reduce((function(e,n,a){return t(b)({},e,t(v)({},n,o[a]))}),{})}function x(t){document.body.style.overflow="auto","Escape"===t.code&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),console.log("close"),L.classList.contains("library_btn--active")&&p(),q.classList.contains("library_btn--active")&&m(),window.removeEventListener("keydown",x))}L.addEventListener("click",(function(){return w=JSON.parse(localStorage.getItem("queued-movies"))})),q.addEventListener("click",(function(){return w=JSON.parse(localStorage.getItem("watched-movies")),console.log(w),w})),(_={openModalCard:document.querySelector(".container-catalog"),modal:document.querySelector("[data-modal]"),modalContainer:document.querySelector(".modal-container")}).openModalCard.addEventListener("click",(function(e){document.body.style.overflow="hidden";var n=e.target.closest(".film-card__link");if(n){_.modal.classList.toggle("is-hidden"),window.addEventListener("keydown",x);var o=Number(n.dataset.id),a=w.find((function(t){return t.id===o}));(function(){var e=a.genre_ids,n=E(),o=[];e.map((function(t){return o.push(n[t])}));var r=a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):t(h),d=a.title,c=Number(a.vote_average).toFixed(1),l=a.vote_count,i=Number(a.popularity).toFixed(1),s=o.join(", ");s||(s="no information");var u=a.overview;u||(u="no information, but coming soon");var m='<div class="img-box">\n           <img\n             class="img-modal"\n             src="'.concat(r,'"\n             alt="').concat(d,'"\n             width="240px"\n           />\n         </div>\n         <div class="content-box">\n           <div class="text-box">\n             <h2 class="modal-title">').concat(d,'</h2>\n             <table>\n               <tbody class="tbody">\n                 <tr>\n                   <td class="tbody-category">Vote / Votes</td>\n                   <td class="tbody-vote">').concat(c,'</td>\n                   <td class="tbody-slash">/</td>\n                   <td class="tbody-votes">').concat(l,'</td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Popularity</td>\n                   <td colspan="4">').concat(i,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Original Title</td>\n                   <td class="tbody-category__text" colspan="4">').concat(d,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Genre</td>\n                   <td class="tbody-category__text" colspan="4">').concat(s,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n               </tbody>\n             </table>\n      \n             <h3 class="modal-subtitle">About</h3>\n             <p class="textAbout">\n               ').concat(u,'\n             </p>\n           </div>\n           <div class="btn-container">\n             <button class="js-toWatched btn-click-modal">add to watched</button>\n             <button class="js-toQueue btn-click-modal">add to queue</button>\n           </div>\n         </div>');_.modalContainer.innerHTML=m})(),(0,S.default)(a)}})),function(){var t={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.closeModalBtn.addEventListener("click",(function(){console.log("close"),document.body.style.overflow="auto",L.classList.contains("library_btn--active")&&p();q.classList.contains("library_btn--active")&&m();t.modal.classList.toggle("is-hidden")})),window.removeEventListener("keydown",x)}(),E(),document.querySelector(".backdrop").addEventListener("click",(function(t){t.currentTarget===t.target&&(document.body.style.overflow="auto",document.querySelector("[data-modal]").classList.toggle("is-hidden"),L.classList.contains("library_btn--active")&&p(),q.classList.contains("library_btn--active")&&m());window.removeEventListener("keydown",x)})),a("e0z42"),a("475fx"),m()}();
//# sourceMappingURL=library.4a213110.js.map
