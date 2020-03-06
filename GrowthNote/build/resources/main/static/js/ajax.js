/**
 options = {
  url: "",
  method: "",
  headers: {},
  data: "",
  success: function(result) {},  // 请求成功后调用此方法
  fail: function(error) {}    // 请求失败或出错后调用此方法
}
 **/
// 封装 ajax
window.ajax = function (options) {
    // 第一步：处理数据
    const ajaxData = {
        url: options.url || "",
        method: options.method.toUpperCase() || "GET",
        headers: options.headers || {},
        data: options.data || null,
        success: options.success || function (result) {},
        fail: options.fail || function (error) {}
    };

    let xhr = new XMLHttpRequest();

    // open 应该放在设置前面，不然没法 setRequestHeader 之类的
    xhr.open(ajaxData.method, ajaxData.url, true);

    if ("POST" === ajaxData.method || "PUT" === ajaxData.method) {
        xhr.setRequestHeader("content-type", "application/json"); // ajaxData.headers.key / value
        ajaxData.data = JSON.stringify(ajaxData.data);
    }

    xhr.onerror = () => ajaxData.fail(xhr.status);
    xhr.onload = () => ajaxData.success(JSON.parse(xhr.responseText));

    xhr.send(ajaxData.data);
};