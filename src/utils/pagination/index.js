/* eslint-disable */
(function(global) {
  var CustomPagination = function(el, options) {
      this.el = typeof el === "string" ? document.querySelector(el) : el;
      var default_options = {
          next_prev_links: "yes",
          inupt_forward: "yes",
          total: 10,
          count: 6,
          changePage: function(pageNum) {}
      };
      if (options) {
          for (var key in options) {
              default_options[key] = options[key]
          }
      }
      this.options = default_options;
      this.current_page = 1;
      this.times = 1;
      this.init()
  };
  CustomPagination.prototype = {
      init: function() {
          var that = this;
          this.destroy();
          var links = this.options.next_prev_links,
          prev_link_html = "",
          next_link_html = "";
          if (links && links.toLowerCase() === "yes") {
              prev_link_html = '<a class="prev-page"> <img src="data:image/png;base64,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" /></a>';
              next_link_html = '<a class="next-page"><img src="data:image/png;base64,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"/></a>'
          }
          var inputs = this.options.inupt_forward,
          input_html = "";
          if (inputs && inputs.toLowerCase() === "yes") {
              input_html = '<div class="page-to">跳至<input type="text" id="page_input" />页<span class="go">GO</span></div>'
          }
          var totals = parseInt(this.options.total),
          counts = parseInt(this.options.count),
          show_pages_html = "";
          if (totals) {
              var page_li_html = "";
              if (totals > counts) {
                  for (var i = 1,
                  len1 = counts; i < len1; i++) {
                      if (i === 1) {
                          page_li_html += '<li class="current-page">' + i + "</li>"
                      } else {
                          page_li_html += "<li>" + i + "</li>"
                      }
                  }
                  show_pages_html = "<ul>" + page_li_html + '<li class="ellipsis">…</li><li>' + totals + "</li>" + "</ul>"
              } else {
                  for (var j = 0,
                  len2 = totals; j < len2; j++) {
                      if (j === 0) {
                          page_li_html += '<li class="current-page">' + (j + 1) + "</li>"
                      } else {
                          page_li_html += "<li>" + (j + 1) + "</li>"
                      }
                  }
                  show_pages_html = "<ul>" + page_li_html + "</ul>"
              }
          }
          var custom_pagination_html = "";
          if (totals && counts) {
              custom_pagination_html = '<div class="custom-pagination">' + prev_link_html + show_pages_html + next_link_html + input_html + "</div>";
              this.el.innerHTML = custom_pagination_html;
              this.positionCenter();
              this.bindClickPage();
              if (links && links.toLowerCase() === "yes") {
                  that.addEvent(this.el.firstChild.querySelector(".prev-page"), "click",
                  function(e) {
                      e = e.target ? e.target: e.srcElement;
                      if (!e.hasAttribute("disabled")) {
                          that.prevPage()
                      }
                  });
                  that.addEvent(this.el.firstChild.querySelector(".next-page"), "click",
                  function(e) {
                      e = e.target ? e.target: e.srcElement;
                      if (!e.hasAttribute("disabled")) {
                          that.nextPage()
                      }
                  })
              }
              if (inputs && inputs.toLowerCase() === "yes") {
                  that.addEvent(this.el.firstChild.querySelector(".go"), "click",
                  function(e) {
                      that.searchInput()
                  })
              }
          }
          this.disablePreNext();
          this.options.changePage(this.current_page)
      },
      reGeneratePageLetter: function() {
          var ul = this.el.firstChild.getElementsByTagName("ul")[0];
          ul.innerHTML = "";
          var end = this.current_page;
          var start = end - (this.options.count - 1);
          var checked = end - 1;
          var totals = parseInt(this.options.total);
          var counts = end;
          var page_li_html = "";
          if (totals > counts) {
              for (var i = start,
              len1 = counts; i < len1; i++) {
                  page_li_html += "<li>" + i + "</li>"
              }
              ul.innerHTML = page_li_html + '<li class="ellipsis">…</li><li>' + totals + "</li>"
          }
          this.positionCenter();
          this.bindClickPage();
          this.times--;
          ul.childNodes[(this.options.count - 1) - 1].click()
      },
      reGeneratePageBigger: function() {
          var ul = this.el.firstChild.getElementsByTagName("ul")[0];
          ul.innerHTML = "";
          var end = this.current_page;
          var start = end + 1;
          var totals = parseInt(this.options.total);
          var counts = parseInt(this.options.count) + end;
          var page_li_html = "";
          if (totals > counts) {
              for (var i = start,
              len1 = counts; i < len1; i++) {
                  page_li_html += "<li>" + i + "</li>"
              }
              ul.innerHTML = page_li_html + '<li class="ellipsis">…</li><li>' + totals + "</li>"
          } else {
              for (var j = end,
              len2 = totals; j < len2; j++) {
                  page_li_html += "<li>" + (j + 1) + "</li>"
              }
              ul.innerHTML = page_li_html
          }
          this.positionCenter();
          this.bindClickPage();
          this.times++;
          ul.childNodes[0].click()
      },
      prevPage: function() {
          if (this.current_page * 1 <= 1) return;
          var currentx_select = this.el.querySelector(".current-page");
          var pre_select = currentx_select.previousElementSibling || currentx_select.previousSibling;
          var should_to_page = this.current_page - 1;
          if (this.options.total > this.options.count) {
              var can_to_page = this.times * (this.options.count - 1) - (this.options.count - 1) + 1;
              if (should_to_page < can_to_page) {
                  this.reGeneratePageLetter()
              } else {
                  pre_select.click()
              }
          } else {
              pre_select.click()
          }
      },
      nextPage: function() {
          if (this.current_page === this.options.total) return;
          var currentx_select = this.el.querySelector(".current-page");
          var next_select = currentx_select.nextElementSibling || currentx_select.nextSibling;
          var should_to_page = this.current_page + 1;
          if (this.options.total > this.options.count) {
              var can_to_page = this.times * (this.options.count - 1);
              if (should_to_page > can_to_page) {
                  if (should_to_page === this.options.total) {
                      var arr = currentx_select.parentNode.childNodes;
                      var ellipsis = false;
                      for (var i = 0; i < arr.length; i++) {
                          if (arr[i].getAttribute("class") === "ellipsis") {
                              ellipsis = true;
                              break
                          }
                      }
                      if (!ellipsis) {
                          next_select.click();
                          return false
                      }
                  }
                  this.reGeneratePageBigger()
              } else {
                  next_select.click()
              }
          } else {
              next_select.click()
          }
      },
      destroy: function() {
          this.el.innerHTML = ""
      },
      disablePreNext: function() {
          if (this.options.total && this.options.count) {
              var links = this.options.next_prev_links;
              if (links && links.toLowerCase() === "yes") {
                  var prev = this.el.firstChild.querySelector(".prev-page");
                  if (this.current_page === 1) {
                      prev.style.cssText = "cursor: not-allowed;opacity: 0.5;";
                      prev.setAttribute("disabled", true)
                  } else {
                      prev.removeAttribute("style");
                      prev.removeAttribute("disabled")
                  }
                  var next = this.el.firstChild.querySelector(".next-page");
                  if (this.current_page === this.options.total) {
                      next.style.cssText = "cursor: not-allowed; opacity: 0.5;";
                      next.setAttribute("disabled", true)
                  } else {
                      next.removeAttribute("style");
                      next.removeAttribute("disabled")
                  }
              }
          }
      },
      positionCenter: function() {
          var w = parseInt(this.el.firstChild.offsetWidth);
          if (w) {
              var margin = "margin: 0 0 0 0";
              this.el.firstChild.style.cssText = margin
          }
      },
      bindClickPage: function() {
          var that = this;
          var ul = this.el.firstChild.getElementsByTagName("ul")[0];
          var lis = ul.querySelectorAll("li");
          for (var l = 0; l < lis.length; l++) {
              if (lis[l].getAttribute("class") !== "ellipsis") { (function(l) {
                      that.addEvent(lis[l], "click",
                      function(e) {
                          var li_event = e.target ? e.target: e.srcElement;
                          var new_page = parseInt(li_event.innerHTML);
                          if (new_page !== that.current_page) {
                              if (new_page === that.options.total) {
                                  var judgeEllipsis = li_event.previousElementSibling || li_event.previousSibling;
                                  if (judgeEllipsis.getAttribute("class") === "ellipsis") {
                                      that.clickEndPage();
                                      return false
                                  }
                              }
                              li_event.setAttribute("class", "current-page");
                              var siblings = that.siblings(li_event);
                              for (var k = 0; k < siblings.length; k++) {
                                  siblings[k].removeAttribute("class")
                              }
                              that.current_page = new_page;
                              that.options.changePage(that.current_page);
                              that.disablePreNext()
                          }
                      })
                  })(l)
              }
          }
      },
      clickEndPage: function() {
          var totals = this.options.total;
          var counts = this.options.count;
          var times = Math.ceil(totals / (counts - 1));
          var remainder = totals % (counts - 1);
          var page_count = 0;
          if (remainder === 1) {
              times -= 1;
              page_count = counts
          } else {
              if (remainder === 0) {
                  page_count = counts - 1
              } else {
                  page_count = remainder
              }
          }
          var ul = this.el.firstChild.getElementsByTagName("ul")[0];
          ul.innerHTML = "";
          var page_li_html = "";
          for (var j = totals - page_count,
          len2 = totals; j < len2; j++) {
              page_li_html += "<li>" + (j + 1) + "</li>"
          }
          ul.innerHTML = page_li_html;
          this.positionCenter();
          this.bindClickPage();
          this.times = times;
          ul.childNodes[page_count - 1].click()
      },
      searchInput: function() {
          var input = this.el.firstChild.querySelector("input");
          var input_val = input.value;
          if (input_val) {
              input_val = parseInt(input_val);
              if (input_val < 0 || input_val === 0) {
                  input_val = 1
              } else {
                  if (input_val > this.options.total) {
                      input_val = this.options.total
                  }
              }
              var total = this.options.total;
              var count = this.options.count;
              var ul = this.el.firstChild.getElementsByTagName("ul")[0];
              if (total > count) {
                  var all_times = Math.ceil(total / (count - 1));
                  var remainder = total % (count - 1);
                  if (remainder === 1) {
                      all_times -= 1
                  }
                  if (total === input_val) {
                      this.clickEndPage()
                  } else {
                      var c_times = this.times;
                      var c_page = this.current_page;
                      var t_times = Math.ceil(input_val / (count - 1));
                      var t_remainder = input_val % (count - 1);
                      var t_page = input_val;
                      if (t_remainder === 0) {
                          t_remainder = count - 1
                      }
                      var page_li_html = "";
                      if (t_times < all_times) {
                          if (t_times === c_times) {
                              ul.childNodes[t_remainder - 1].click()
                          } else {
                              var start2 = (t_times - 1) * (count - 1);
                              var end2 = t_times * (count - 1);
                              for (var i = start2 + 1,
                              len1 = end2 + 1; i < len1; i++) {
                                  page_li_html += "<li>" + i + "</li>"
                              }
                              ul.innerHTML = page_li_html + '<li class="ellipsis">…</li><li>' + total + "</li>";
                              this.positionCenter();
                              this.bindClickPage();
                              this.times = t_times;
                              ul.childNodes[t_remainder - 1].click()
                          }
                      } else {
                          var start1 = (t_times - 1) * (count - 1);
                          for (var j = start1,
                          len2 = total; j < len2; j++) {
                              page_li_html += "<li>" + (j + 1) + "</li>"
                          }
                          ul.innerHTML = page_li_html;
                          this.positionCenter();
                          this.bindClickPage();
                          this.times = t_times;
                          ul.childNodes[t_remainder - 1].click()
                      }
                  }
              } else {
                  if (this.current_page !== input_val) {
                      ul.childNodes[input_val - 1].click()
                  }
              }
              input.value = ""
          }
      },
      addEvent: function(elem, type, fn) {
          if (elem.attachEvent) {
              elem.attachEvent("on" + type, fn);
              return
          }
          if (elem.addEventListener) {
              elem.addEventListener(type, fn, false)
          }
      },
      siblings: function(currentNode) {
          var siblings = [];
          var elseLi = currentNode.parentNode.children;
          for (var i = 0,
          elseLil = elseLi.length; i < elseLil; i++) {
              if (elseLi[i] !== currentNode && elseLi[i].getAttribute("class") !== "ellipsis") {
                  siblings.push(elseLi[i])
              }
          }
          return siblings
      }
  };
  if (typeof module !== "undefined" && module.exports) {
      module.exports = CustomPagination
  }
  if (typeof define === "function") {
      define(function() {
          return CustomPagination
      })
  }
  global.CustomPagination = CustomPagination
})(this);