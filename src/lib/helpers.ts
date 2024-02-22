export function getParameterByName(name: string, url: string = '') {
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export function generateUTM(url: string = 'https://cooltoybro.com') {
  return url + '/?utm_source=cooltoybro.com&utm_medium=referral'
}
