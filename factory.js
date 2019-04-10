// 格式化钱
export const formatMoney = function (money) {

  if(isNaN(Number(money))){
    return money
  }

  // 没有传参数或者值为空字符
  if (money == null || money == "") {
    return "0.00";
  } else {
    // 取出参数的数字部分
    var fMoney =  parseFloat(money) / 100 ;
    money = fMoney + "";
    // 不是正确的数字格式
    if (money == null || money == "") {
      return "0.00";
    }
    // 判断是否有小数点
    var index = money.indexOf(".");
    // 不存在小数
    if (index == -1) {
      // 判断整数部分添加,（逗号）
      for (var i = 0; i < Math.floor((money.length - (1 + i)) / 3); i++) {
        money = money.substring(0, money.length - (4 * i + 3)) + ',' + money.substring(money.length - (4 * i + 3));
      }
      return money + ".00";
    } else {
      // 存在小数
      var sb = "";
      var s0 = money.substring(0, index); // 整数部分
      
      var s1 = money.substring(index + 1); // 小数部分
      if (s1.length == 1) { // 小数点后一位，补足2位小数
        s1 = s1 + "0";
      } else if (s1.length > 2) { // 如果超过3位小数，截取2位就可以了
        s1 = s1.substring(0, 2);
      }
      // 判断整数部分添加,（逗号）
      for (var i = 0; i < Math.floor((s0.length - (1 + i)) / 3); i++) {
        s0 = s0.substring(0, s0.length - (4 * i + 3)) + ',' + s0.substring(s0.length - (4 * i + 3));
      }
      sb += s0;
      sb +=".";
      sb += s1;
      money = sb.toString();
      return money;
    }
  }
}

// 格式化积分
export const formatIntegral = function (integral) {
  // 没有传参数或者值为空字符
  if (integral == null || integral == "") {
    return "0";
  } else {
    // 取出参数的数字部分
    var fMoney = Math.floor( parseFloat(integral) + 0.50000000001 );
    integral = fMoney + "";
    // 不是正确的数字格式
    if (integral == null || integral == "") {
      return "0";
    }

      // 判断整数部分添加,（逗号）
      for (var i = 0; i < Math.floor((integral.length - (1 + i)) / 3); i++) {
        integral = integral.substring(0, integral.length - (4 * i + 3)) + ',' + integral.substring(integral.length - (4 * i + 3));
      }

      return integral;
    }
  }

// 判断是否有会员活动
export const isHasMemberActivity = function (goodsInfo) {


  let  minPrice = goodsInfo.fSalePrice != undefined?parseFloat(goodsInfo.fSalePrice):0;

  // 存在fSizePrice
   minPrice = goodsInfo.fSizePrice != undefined && parseFloat(goodsInfo.fSizePrice) < minPrice?parseFloat(goodsInfo.fSizePrice):minPrice

  // 存在discountPrice
  minPrice = goodsInfo.discountPrice != undefined && parseFloat(goodsInfo.discountPrice) < minPrice?parseFloat(goodsInfo.discountPrice):minPrice;

 
  // 会员价
  if(goodsInfo.fVipPrice != undefined){
    if(parseFloat(goodsInfo.fVipPrice) < minPrice){
      return true;
    } else {
      return false;
    }
  }else {
    return false;
  }
};
// 判断是否有特价活动
export const isHasDiscountActivity = function (goodsInfo) {
  
  let  minPrice = goodsInfo.fSalePrice != undefined?parseFloat(goodsInfo.fSalePrice):0;

  // 存在fSizePrice
   minPrice = goodsInfo.fSizePrice != undefined && parseFloat(goodsInfo.fSizePrice) < minPrice?parseFloat(goodsInfo.fSizePrice):minPrice

  // 存在fVipPrice
  minPrice = goodsInfo.fVipPrice != undefined && parseFloat(goodsInfo.fVipPrice) < minPrice?parseFloat(goodsInfo.fVipPrice):minPrice;

  // 特价
  if(goodsInfo.discountPrice != undefined){

    if(parseFloat(goodsInfo.discountPrice) < minPrice){
      return true;
    } else {
      return false;
    }

  }else {
    return false;
  }

};


// 取三个价格里面的最小值
export const getMinPrice = function (fSalePrice, fVipPrice, discountPrice) {
  // 先将原价存起来
  var tempValue = fSalePrice === undefined ? 0 : Number(fSalePrice);
  // 判断是否存在会员价
  if (fVipPrice != undefined && tempValue > Number(fVipPrice)) {
    tempValue = Number(fVipPrice);
  } 
  // 判断是否存在特价
  if (discountPrice != undefined && tempValue > Number(discountPrice)) {
    tempValue = Number(discountPrice);
  }
  // 将最小值抛出去
  return tempValue;
};


export function formatDate8(dateStr)
{
	var formatDate = "";
	if(dateStr == null || dateStr == ""){
		return "";
	}
	if(dateStr.length < 8){
		return "";
	}
	formatDate += dateStr.substring(0, 4) + "-";
	formatDate += dateStr.substring(4, 6) + "-";
	formatDate += dateStr.substring(6, 8);

	return formatDate;
}


export function formatDate8Arr(dateStr)
{
  var arr = [];
	if(dateStr == null || dateStr == "")
	{
		return "";
	}
	if(dateStr.length < 8)
	{
		return "";
  }

  arr.push(parseFloat(dateStr.substring(0, 4)))
  arr.push(parseFloat(dateStr.substring(4, 6)))
  arr.push(parseFloat(dateStr.substring(6, 8)))

	return arr;
}

/**
 * 格式化日期 yyyy-MM-dd HH:mm:ss
 * 
 * @param dateStr
 * @returns {String}
 */
export function formatDate14(dateStr)
{
	var formatDate = "";
	if(dateStr == null || dateStr == ""){
		return "";
	}
	if(dateStr.length < 8)
	{
		return "";
	}
	formatDate += dateStr.substring(0, 4) + "-";
	formatDate += dateStr.substring(4, 6) + "-";
  formatDate += dateStr.substring(6, 8);
  
	if(dateStr.length >= 10)
	{
		formatDate += " " + dateStr.substring(8, 10);
	}
	if(dateStr.length >= 12)
	{
		formatDate += ":" + dateStr.substring(10, 12);
	}
	if(dateStr.length >= 14)
	{
		formatDate += ":" + dateStr.substring(12, 14);
	}
	return formatDate;
}

/**
 * 格式化日期 String 转成 HH:mm:ss
 */
export function formatDate6h(dateStr){
	var formatDate = "";
	if(dateStr == null || dateStr == "")
	{
		return "";
	}
	if(dateStr.length < 6)
	{
		return "";
	}
	formatDate += dateStr.substring(0, 2) + ":";
	formatDate += dateStr.substring(2, 4) + ":";
	formatDate += dateStr.substring(4, 6);
	return formatDate;
}

// 日期对象转字符串  20181201135800
export function formatDateTime14(date) {  
  var y = date.getFullYear();  
  var m = date.getMonth() + 1;  
  m = m < 10 ? ('0' + m) : m;  
  var d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  var h = date.getHours();  
  h=h < 10 ? ('0' + h) : h;  
  var minute = date.getMinutes();  
  minute = minute < 10 ? ('0' + minute) : minute;  
  var second=date.getSeconds();  
  second=second < 10 ? ('0' + second) : second;  
  // y + '-' + m + '-' + d+' '+h+':'+minute+':'+second; 
  return "" + y + m + d + h + minute + second;  
};  


// 判断跳转逻辑
export function handleUrl() {
  // 如果路由参数传过来，则跳转到指定页面
  let str1 = decodeURIComponent(window.location.href).match(/\?.*#/);
  let str2 = [];
  if (str1 === null) {
    // 没有参数，返回一个空数组
    return {}
  } else {
    str1[0].slice(1, str1[0].length - 1).split("&").map(item => {
        str2.push(item.split("="));
    });
    var urlObj = {};
    str2.forEach(ele => {
      urlObj[ele[0]] = ele[1];
    });
    return urlObj;
  }
}

// 判断跳转逻辑
export function handleUrlNoDecode() {
  // 如果路由参数传过来，则跳转到指定页面
  let str1 = window.location.href.match(/\?.*#/);
  let str2 = [];
  if (str1 === null) {
    // 没有参数，返回一个空数组
    return {}
  } else {
    str1[0].slice(1, str1[0].length - 1).split("&").map(item => {
        str2.push(item.split("="));
    });
    var urlObj = {};
    str2.forEach(ele => {
      urlObj[ele[0]] = ele[1];
    });
    return urlObj;
  }
}


// 屏幕适配,设置rem的值
export function setRemValue() {

  const docEl = document.documentElement
  const metaEl = document.querySelector('meta[name="viewport"]')

  const maxWidth = window.__MAX_WIDTH__ || 750
  const divPart = window.__DIV_PART__ || 37.5
  const bodySize = window.__BODY_SIZE__ || 12

  let scale = 1
  let dpr = 1
  let timer = null

  if (metaEl) {
  
    const match = metaEl.getAttribute('content').match(/initial-scale=([\d.]+)/)
  
    if (match) {
      scale = parseFloat(match[1])
      dpr = parseInt(1 / scale)
    }
  } else {
    if (window.navigator.appVersion.match(/iphone/gi)) {
      dpr = parseInt(window.devicePixelRatio) || 1
      scale = 1 / dpr
    }
    const newMetaEl = document.createElement('meta')
    newMetaEl.setAttribute('name', 'viewport')
    newMetaEl.setAttribute('content', `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`)
    docEl.firstElementChild.appendChild(newMetaEl)
  }
  
  // 设置根节点dpr
  docEl.setAttribute('data-dpr', dpr);
  function bodyLoaded (cb) {
    if (document.body) {
      cb && cb()
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        cb && cb()
      }, false)
    }
  }

  function refreshRem () {
    let width = docEl.clientWidth
  
    if (width / dpr > maxWidth) {
      width = maxWidth * dpr
    }
  
    // 设置根节点font-size
    window.remUnit = width / divPart;
    docEl.style.fontSize = window.remUnit + 'px';
  
    bodyLoaded(() => {
      // 测试rem的准确性，如果和预期不一样，则进行缩放
      let noEl = document.createElement('div')
      noEl.style.width = '1rem'
      noEl.style.height = '0'
      document.body.appendChild(noEl);

      // div 的可视宽度 除以根元素的字体大小，超多了0.01，重置样式
      // 兼容1像素在部分手机上显示异常的问题
      // 兼容图片模糊问题
      let rate = noEl.clientWidth / window.remUnit;
      if (Math.abs(rate - 1) >= 0.01) {
        docEl.style.fontSize = (window.remUnit / rate) + 'px'
      }
      // 移除测试的div元素
      document.body.removeChild(noEl);
    })
  }

  // 兼容orientationchange事件
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  // 如果已经监听了事件，不在重复绑定事件
  if (!document.addEventListener) return;
  // 监听orientationchange和resize事件
  window.addEventListener(resizeEvt, () => {
    clearTimeout(timer)
    timer = setTimeout(refreshRem, 200)
  } , false);
  // 监听页面唤醒事件
  window.addEventListener('pageshow', () => {
    clearTimeout(timer)
    timer = setTimeout(refreshRem, 200)
  }, false);
  // 监听DOM解析完成事件
  document.addEventListener('DOMContentLoaded', () => {
    clearTimeout(timer)
    timer = setTimeout(refreshRem, 200)
  }, false);
}


export function px2rem (d) {
  let val = parseFloat(d) / window.remUnit

  if (typeof d === 'string' && d.match(/px$/)) {
    val += 'rem'
  }
  return val
}

export function rem2px (d) {
  let val = parseFloat(d) * window.remUnit

  if (typeof d === 'string' && d.match(/rem$/)) {
    val += 'px'
  }

  return val
}

// 获取rem的值
export function getRemValue(){
  window.getComputedStyle(document.documentElement)["fontSize"]
}


// 获取可视高度
export function getClentHeight(){
  // 获取可视宽度
  
  let client_width = document.documentElement.clientWidth || document.body.clientWidth;

  // 获取可视高度
  let client_height = document.documentElement.clientHeight || document.body.clientHeight;

  return Math.floor(client_height/client_width*37.5)

}


//处理手机号
export function mobileTurn(val) {
  if (val) {
    return val.substr(0, 3) + "****" + val.substr(8);
  } else {
    return "";
  }
}




// 获取当前路径
export function getCurrentUrl(par_url){
  const u = navigator.userAgent;
  if (u.indexOf("iPhone") > -1 || u.indexOf("iPad") > -1) {
    return par_url;
  } else {
    return location.href.split("#")[0];
  }
}



// 加法：
export function addOper(arg1,arg2){
    var r1,r2,m; 
    try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
    try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
    m=Math.pow(10,Math.max(r1,r2));
    return (accMul(arg1,m)+accMul(arg2,m))/m;
}

// 减法：
export function subOper(arg1,arg2){
    var r1,r2,m; 
    try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
    try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
    m=Math.pow(10,Math.max(r1,r2));
    return (accMul(arg1,m)-accMul(arg2,m))/m;
}

// 乘法：
export function mulOper(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

// 除法：
export function divOper(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    
    r1=Number(arg1.toString().replace(".",""))
    r2=Number(arg2.toString().replace(".",""))
    return (r1/r2)*Math.pow(10,t2-t1);
    
}


//压缩图片
export function compressImage (file, success, error){

  // 图片小于1M不压缩
  if (file.size < Math.pow(1024, 2)) {
      return success(file);
  }
  const name = file.name; //文件名


  const reader = new FileReader();

  
  reader.readAsDataURL(file);
  
  reader.onload = (e) => {

    

      const src = e.target.result;


      
      const img = new Image();
      

      
      img.src = src;


          const w = img.width;
          const h = img.height;
          const quality = 0.8;  // 默认图片质量为0.92
          //生成canvas
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          // 创建属性节点
          const anw = document.createAttribute("width");
          anw.nodeValue = w;
          const anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);

          //铺底色 PNG转JPEG时透明区域会变黑色
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, w, h);

          ctx.drawImage(img, 0, 0, w, h);
          // quality值越小，所绘制出的图像越模糊
          const base64 = canvas.toDataURL('image/jpeg', quality); //图片格式jpeg或webp可以选0-1质量区间

          // 返回base64转blob的值
          console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
          //去掉url的头，并转换为byte
          const bytes = window.atob(base64.split(',')[1]);
          //处理异常,将ascii码小于0的转换为大于0
          const ab = new ArrayBuffer(bytes.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < bytes.length; i++) {
              ia[i] = bytes.charCodeAt(i);
          }
          file = new Blob( [ab] , {type : 'image/jpeg'});
          file.name = name;

          success(file);
  }
  reader.onerror = (e) => {
      error(e);
  }
}


export default {
  formatMoney,
  handleUrl,
  formatDate8,
  formatDate6h
}
