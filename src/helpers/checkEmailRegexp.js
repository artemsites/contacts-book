// @todo вынести себе в helpers
export function checkEmailRegexp(str) {
  if (str.search(/([\S.]*[@]{1}[\S.]*\.[a-z]{2,}$)/gi) === 0) return true
  return false
}