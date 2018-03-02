/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

import writeFile from './write'

export default (opts) => {
  const file = `
/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * 命令行颜色
 * https://www.npmjs.com/package/chalk
 */
import chalk from 'chalk'

/**
 * 如果您的项目目录相对于fez工程目录层级太深
 * 请修改此数值
 */
let fezDeep = 3

const fez = (fezDirectory) => {
    if (--fezDeep < 0) {
        fancyLog(chalk.cyan("您的项目目录层级太深"))
        fancyLog(chalk.cyan("请修改 gulpfile 文件中的 fezDeep 为更大的数值"))
        return
    }

    fezDirectory = path.join('../', fezDirectory)

    if (fs.existsSync(fezDirectory)) {
        require(fezDirectory).default()
    } else {
        fez(fezDirectory)
    }
}

fez('.fez')

    `
  return new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}`,
      fileName: 'gulpfile.babel.js',
      data: file,
      success() {
        fancyLog(`创建 ${path.join(this.directory, this.fileName)} 成功`)
        resolve()
      },
      error() {
        fancyLog(`创建 ${path.join(this.directory, this.fileName)} 失败`)
        reject()
      }
    })
  })
}
