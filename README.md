# Pre-work: A Todo List

## 已实现的功能

- [x] 增加一个待办事项
  ![add.gif](https://i.loli.net/2019/04/03/5ca4ae2bbeb33.gif)

- [x] 删除一个待办事项
  ![delete.gif](https://i.loli.net/2019/04/03/5ca4ae29e92ef.gif)

- [x] 标记一个待办事项为已完成
  ![complete.gif](https://i.loli.net/2019/04/03/5ca4ae28c2ab6.gif)

- [x] 编辑一个待办事项的具体内容
  ![edit.gif](https://i.loli.net/2019/04/03/5ca4ae2b835d0.gif)

- [x] 列出所有的待办事项
  可以选择列出所有任务/只列出未完成任务。
  ![show.gif](https://i.loli.net/2019/04/03/5ca4ae2b41113.gif)

## 未实现的功能

- [ ] 列表界面支持翻页
- [ ] 待办事项可以设置优先级
- [ ] 待办事项可以设置expire date
  如何提醒呢？
  - [ ] 1. 发邮件。
- [ ] 支持按照不同的方式排序，如优先级，expire date


## 代码需要完善的地方

* 抽象
  目前只写了一个组件，200行，这无疑是非常不可取的，不利于阅读和debug。

* 环境
  换成django1.8+python2.

* 美化
  使用Bootstrap美化界面，现在的界面太简陋。

* 数据库
  使用PostgreSQL。

## 总结

只实现了最基本的功能，界面也是最简陋的。甚至连用户注册都没有。

以前只用django，因为django作为一个重量级框架还是挺强大的。临时学了djangorestframework+react（其实还有js）。

通过这个prework了解了前后端分离的概念。还看到有人说django和rest配合并不好，有专门的rest框架：falcon，apistar，python-eve等。

大部分时间都花在搜索功能怎么实现和看react、js文档上了。真正写代码的时间反而不多。而且代码也不多，但是debug时间很长。因为第一次写前端，对网络和浏览器不是很熟悉。

刚开始做这个项目的时候很兴奋，但是连续几天不知道怎么做、一直在看文档，对自己产生了怀疑。不过最终还是（差强人意地）完成了。

感想就是自己仍然会得很少，前方还有很长的路要走。

