/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 创建统一结构化模板页面
 * ---------------------------------
 */

/**
 * 解析参数
 * https://www.npmjs.com/package/minimist
 */
import minimist from 'minimist'

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

/**
 * 引入 .fezconfig 配置
 */
import config from './utils/fezconfig'

/**
 * 创建初始化相关文件和目录
 */
import createPage from './utils/page'

const argv = minimist(process.argv.slice(2))

export default () => {

  function initPage(cb) {
    createPage({
      name: argv.name || argv.dir,
      directory: argv.dir,
      path: argv.path,
      cb: cb,
      fezconfig: config
    })
  }

  /*****************
   * 自动化创建新页面
   *****************/
  gulp.task('page', gulp.series(
    initPage
  ))
}
