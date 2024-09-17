document.addEventListener("DOMContentLoaded", function () {
    var tocList = document.getElementById("toc-list");
    if (!tocList) return;
  
    var headers = document.querySelectorAll(".content h1, .content h2, .content h3, .content h4, .content h5, .content h6");
    headers.forEach(function (header) {
      var li = document.createElement("li");
      li.textContent = header.textContent;
      li.className = "toc-item toc-" + header.tagName.toLowerCase();
  
      // 为每个标题添加跳转链接
      var link = document.createElement("a");
      link.href = "#" + header.id;
      link.textContent = header.textContent;
      li.appendChild(link);
  
      tocList.appendChild(li);
    });
  });
  