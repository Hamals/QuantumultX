const chavy = init()
const cookieName = '人人视频'
const KEY_signcookie = 'chavy_cookie_rrtv'

const signinfo = {}
let VAL_signcookie = chavy.getdata(KEY_signcookie)

;(exec = async () => {
  chavy.log(`🔔 ${cookieName} 开始签到`)
  await signdaily()
  await signwelfare()
  await getquestion()
  if (!signinfo.hasAnswered) {
    await answerquestion()
    await getquestion()
  }
  await getinfo()
  await showmsg()
})().catch((e) => chavy.log(`❌ ${cookieName} 签到失败: ${e}`))

function signdaily() {
  return new Promise((resolve, reject) => {
    let url = { url: `https://api.rr.tv/rrtv-activity/sign/sign`, headers: { token: VAL_signcookie } }
    url.headers['clientType'] = `ios_rrsp_jzsp`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    url.headers['clientVersion'] = `4.3.5`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded; charset=UTF-8`
    url.headers['Origin'] = `https://mobile.rr.tv`
    url.headers['Referer'] = `https://mobile.rr.tv/`
    url.headers['Accept'] = `application/json, text/plain, */*`
    url.headers['Host'] = `api.rr.tv`
    url.headers['Accept-Language'] = `zh-cn`
    url.headers['Content-Length'] = `12`
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5'
    chavy.post(url, (error, response, data) => {
      try {
        signinfo.signdaily = JSON.parse(data)
        resolve()
      } catch (e) {
        chavy.msg(cookieName, `日常签到: 失败`, `说明: ${e}`)
        chavy.log(`❌ ${cookieName} signdaily - 日常签到失败: ${e}`)
        chavy.log(`❌ ${cookieName} signdaily - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function signwelfare() {
  return new Promise((resolve, reject) => {
    let url = { url: `https://api.rr.tv/dailyWelfare/getWelfare`, headers: { token: VAL_signcookie } }
    url.headers['clientType'] = `web`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    url.headers['clientVersion'] = `0.0.1`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded; charset=UTF-8`
    url.headers['Origin'] = `https://mobile.rr.tv`
    url.headers['Referer'] = `https://mobile.rr.tv/mission/`
    url.headers['Accept'] = `application/json, text/plain, */*`
    url.headers['Host'] = `api.rr.tv`
    url.headers['Accept-Language'] = `zh-cn`
    url.headers['Content-Length'] = `45`
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5'
    chavy.post(url, (error, response, data) => {
      try {
        signinfo.signwelfare = JSON.parse(data)
        resolve()
      } catch (e) {
        chavy.msg(cookieName, `日常签到: 失败`, `说明: ${e}`)
        chavy.log(`❌ ${cookieName} signwelfare - 日常签到失败: ${e}`)
        chavy.log(`❌ ${cookieName} signwelfare - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function getinfo() {
  return new Promise((resolve, reject) => {
    let url = { url: `https://api.rr.tv/user/profile`, headers: { token: VAL_signcookie } }
    url.headers['clientType'] = `ios_rrsp_jzsp`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    url.headers['clientVersion'] = `4.3.5`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded; charset=UTF-8`
    url.headers['Origin'] = `https://mobile.rr.tv`
    url.headers['Referer'] = `https://mobile.rr.tv/`
    url.headers['Accept'] = `application/json, text/plain, */*`
    url.headers['Host'] = `api.rr.tv`
    url.headers['Accept-Language'] = `zh-cn`
    url.headers['Content-Length'] = `0`
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5'
    chavy.post(url, (error, response, data) => {
      try {
        signinfo.userinfo = JSON.parse(data)
        resolve()
      } catch (e) {
        chavy.msg(cookieName, `获取会员信息: 失败`, `说明: ${e}`)
        chavy.log(`❌ ${cookieName} getinfo - 获取会员信息失败: ${e}`)
        chavy.log(`❌ ${cookieName} getinfo - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function getquestion() {
  return new Promise((resolve, reject) => {
    let url = { url: `https://api.rr.tv/v3plus/question/getQuestion`, headers: { token: VAL_signcookie } }
    url.headers['clientType'] = `ios_rrsp_jzsp`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    url.headers['clientVersion'] = `4.3.5`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded; charset=UTF-8`
    url.headers['Origin'] = `https://mobile.rr.tv`
    url.headers['Referer'] = `https://mobile.rr.tv/`
    url.headers['Accept'] = `application/json, text/plain, */*`
    url.headers['Host'] = `api.rr.tv`
    url.headers['Accept-Language'] = `zh-cn`
    url.headers['Content-Length'] = `0`
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5'
    chavy.post(url, (error, response, data) => {
      try {
        signinfo.question = JSON.parse(data)
        signinfo.questionopts = {}
        for (opt of signinfo.question.data.question.optionViewList) {
          signinfo.questionopts[opt.id] = opt
          if (!signinfo.answeropt) signinfo.answeropt = opt
          else signinfo.answeropt = opt.answererCount > signinfo.answeropt.answererCount ? opt : signinfo.answeropt
        }
        signinfo.hasAnswered = signinfo.question.data.question.hasAnswered
        if (signinfo.hasAnswered) {
          signinfo.selectId = signinfo.question.data.question.selectId
          signinfo.isRight = signinfo.questionopts[signinfo.selectId].isRight
        }
        resolve()
      } catch (e) {
        chavy.msg(cookieName, `获取问题: 失败`, `说明: ${e}`)
        chavy.log(`❌ ${cookieName} getquestion - 获取问题失败: ${e}`)
        chavy.log(`❌ ${cookieName} getquestion - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function answerquestion() {
  return new Promise((resolve, reject) => {
    let url = { url: `https://api.rr.tv/v3plus/question/answerQuestion`, headers: { token: VAL_signcookie } }
    url.body = `optionId=${signinfo.answeropt.id}`
    url.headers['clientType'] = `ios_rrsp_jzsp`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    url.headers['clientVersion'] = `4.3.5`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded; charset=UTF-8`
    url.headers['Origin'] = `https://mobile.rr.tv`
    url.headers['Referer'] = `https://mobile.rr.tv/`
    url.headers['Accept'] = `application/json, text/plain, */*`
    url.headers['Host'] = `api.rr.tv`
    url.headers['Accept-Language'] = `zh-cn`
    url.headers['Content-Length'] = `0`
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5'
    chavy.post(url, (error, response, data) => {
      try {
        chavy.log(`❕ ${cookieName} answerquestion: ${data}`)
        signinfo.answerquestion = JSON.parse(data)
        resolve()
      } catch (e) {
        chavy.msg(cookieName, `获取问题: 失败`, `说明: ${e}`)
        chavy.log(`❌ ${cookieName} getquestion - 获取问题失败: ${e}`)
        chavy.log(`❌ ${cookieName} getquestion - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function showmsg() {
  let subTitle = ''
  let detail = ''
  if (signinfo.signdaily) {
    subTitle = `签到: `
    if (signinfo.signdaily.code == '0000' || signinfo.signdaily.code == '8750') {
      subTitle += signinfo.signdaily.code == '0000' ? '成功; ' : ''
      subTitle += signinfo.signdaily.code == '8750' ? '重复; ' : ''
    } else {
      subTitle += '失败; '
    }
  }
  if (signinfo.signwelfare) {
    subTitle += `福利: `
    if (signinfo.signwelfare.code == '0000' || signinfo.signwelfare.code == '8623') {
      subTitle += signinfo.signwelfare.code == '0000' ? '成功; ' : ''
      subTitle += signinfo.signwelfare.code == '8623' ? '重复; ' : ''
    } else {
      subTitle += '失败;'
    }
  }
  if (signinfo.question && signinfo.questionopts) {
    subTitle += `答题: ${signinfo.isRight ? '✅' : '❌'}`
  }

  if (signinfo.userinfo.code == '0000') {
    const levelStr = signinfo.userinfo.data.user.levelStr ? ` (${signinfo.userinfo.data.user.levelStr})` : ``
    detail = `等级: ${signinfo.userinfo.data.user.level}${levelStr}, 积分: ${signinfo.userinfo.data.user.score}`
  } else {
    detail = `编码: ${signinfo.userinfo.code}, 说明: ${signinfo.userinfo.msg}`
  }

  if (signinfo.question.data.question) {
    detail += `\n查看答题详情`
    detail += `\n\n问题: ${signinfo.question.data.question.questionStr}`
    for (key in signinfo.questionopts) detail += `\n选项: ${signinfo.questionopts[key].optionStr}, 回答人数: ${signinfo.questionopts[key].answererCount} (${signinfo.questionopts[key].percent})`
    if (signinfo.selectId) {
      detail += `\n最佳回答: ${signinfo.answeropt.optionStr}`
      detail += `\n我的回答: ${signinfo.questionopts[signinfo.selectId].optionStr}`
      detail += `${signinfo.isRight ? '✅' : '❌'}`
    } else {
      detail += `\n最佳回答: ${signinfo.answeropt.optionStr}`
    }
  }
  chavy.msg(cookieName, subTitle, detail)
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
