function domainName(url) {
  url = url.replace(/(^\w+:|^)\/\//, '')

  let domain = url.split('/')[0]

  domain = domain.replace(/^www\./, '')

  domain = domain.split('.')[0]

  return domain
}

/* function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}; */

console.log(domainName('http://google.co.jp'))
console.log(domainName('http://github.com/carbonfive/raygun'))
console.log(domainName('http://www.zombie-bites.com'))
console.log(domainName('https://www.cnet.com'))
