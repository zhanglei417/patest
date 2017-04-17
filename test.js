"use strict";

var UiSelector = require("yunos/test/uiautomator/UiSelector");
var UiObject = require("yunos/test/uiautomator/UiObject");
var UiDevice = require("yunos/test/uiautomator/UiDevice");
// var UiWatcher = require("yunos/test/uiautomator/UiWatcher");
// 启动apidemo应用
setTimeout(() => {
    new UiObject(new UiSelector().text("SettingsHome")).click();
    UiDevice.sleep(1000);
    UiDevice.drag(390, 218, 674, 218, 10);
    UiDevice.sleep(3000);
    UiDevice.drag(390, 350, 674, 350, 10);
    UiDevice.sleep(3000);
    UiDevice.click(520, 500);
    UiDevice.sleep(3000);
    UiDevice.click(520, 500);
    UiDevice.sleep(3000);
    new UiObject(new UiSelector().text("动作")).click();
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("网络")).click();
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("系统")).click();
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("系统升级")).click();
    UiDevice.sleep(2000);
    UiDevice.click(35, 30);
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("重启机器人")).click();
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("取消")).click();
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("关闭机器人")).click();
    UiDevice.sleep(2000);
    new UiObject(new UiSelector().text("取消")).click();
    UiDevice.sleep(2000);
    // new UiObject(new UiSelector().text("退出设置")).click();
    if (new UiObject(new UiSelector().text("退出设置")).exists()) {
        new UiObject(new UiSelector().text("退出设置")).click();
        console.warn("test finish");
    }
    else {
        console.warn("no such text");
    }
}, 1000);
