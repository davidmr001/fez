/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《致奇舞团.康永威&金小芳新婚》
 * 于 2014.9月 360总部
 * ------------------
 * 金光初照百花香
 * 小家碧玉傲群芳
 * 永定三生天下威
 * 自得情深富安康
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

import writeFile from '../write';

export default (opts) => {

  let createProjectFolder = new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}`,
      success() {
        fancyLog(`创建 ${opts.directory} 成功`);
        resolve()
      },
      error() {
        fancyLog(`创建 ${opts.directory} 失败`);
        reject()
      }
    });
  })

  return new Promise((resolve, reject) => {
    createProjectFolder.then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src`,
          success() {
            fancyLog(`创建 ${opts.directory}/src 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/lib`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/lib 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/lib 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/static`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/static 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/static 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/static/fonts`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/static/fonts 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/static/fonts 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/static/images`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/static/images 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/static/images 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/static/styles`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/static/styles 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/static/styles 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/views`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/views 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/views 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/views/index`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/views/index 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/views/index 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/views/index/module`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/views/index/module 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/views/index/module 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/views/public`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/views/public 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/views/public 失败`);
            reject()
          }
        });

      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/views/public/module`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/views/public/module 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/views/public/module 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      return new Promise((resolve, reject) => {
        writeFile({
          directory: `${opts.directory}/src/views/public/utils`,
          success() {
            fancyLog(`创建 ${opts.directory}/src/views/public/utils 成功`);
            resolve()
          },
          error() {
            fancyLog(`创建 ${opts.directory}/src/views/public/utils 失败`);
            reject()
          }
        });
      })
    }).then(() => {
      resolve()
    })
  })
}