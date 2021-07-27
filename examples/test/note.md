# 初始化
## src\platforms\web\entry-runtime-with-compiler.js
入口文件
- 扩展$mount: 解析 el 和 template, 编译render

## src\platforms\web\runtime\index.js
平台运行时主页
- 实现 mount 方法,执行挂载组件
- 安装 patch 函数

## src\core\index.js
通用运行时主页
- 全局api初始化

## src\core\instance\index.js
实例首页
- 声明Vue构造函数
- 扩展Vue实例方法

## src\core\instance\init.js
实例初始化

# 异步更新
## src\core\observer\index.js
- defineReactive 中 set 执行 dep.notify()

## src\core\observer\dep.js
- watcher 中 update() 执行更新

## src\core\observer\watcher.js
- queueWatcher() watch入队

## src\core\observer\scheduler.js
- nextTick(flushSchedulerQueue) 尝试使用异步方式去执行flushSchedulerQueue,存入callbacks中

## src\core\util\next-tick.js
- timerFunc() 启动异步任务, p.then(flushCallbacks) => 将 flushCallbacks 放入微任务队列

-----  异步 ------

## src\core\util\next-tick.js
- flushCallbacks() 执行callbacks中所有函数

## src\core\observer\scheduler.js
- flushSchedulerQueue()

## src\core\observer\watcher.js
- water.run()
- this.get()
- this.getter.call(vm, vm)

## src\core\instance\lifecycle.js
- updateComponent()

## src\core\instance\render.js
- vm._render() 生成虚拟Dom

## src\core\instance\lifecycle.js
- vm._update() 转换vnode成dom

## src\platforms\web\runtime\index.js
- __patch__

## src\core\vdom\patch.js  L700
- patch()
- key的重要性 L37