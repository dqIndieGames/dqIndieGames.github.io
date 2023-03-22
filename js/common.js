function getLocalizedUrl(baseurl, url, lang) {
    let temp
    if (lang === 'en') {
        temp = baseurl + '/' + url;
    } else {
        temp = baseurl + '/' + lang + '/' + url;
    }
    window.location = temp;
  }


  function getPageLocalizedUrl(baseurl, pageurl, lang) {
    let temp;
    if (lang === 'en') {
        // 查找第二个斜杠的位置
        const index = pageurl.indexOf('/', pageurl.indexOf('/') + 1);

        // 删除第二个斜杠之前的所有字符
        if (index !== -1) {
            pageurl = pageurl.substring(index);
        }
        temp = baseurl + pageurl;
    } else {
        temp = baseurl + '/' + lang + pageurl;
    }
    window.location = temp;
  }

  function goToRoot(baseurl, lang) {
    let temp;
    if (lang === 'en') {
        temp = baseurl; 
    } else {
        temp = baseurl + '/' + lang + '/' + 'index.html';
    }
    window.location = temp;
  }