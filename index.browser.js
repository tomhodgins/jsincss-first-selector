function first(selector, rule) {
  const attr = selector.replace(/\W/g, '')
  const tag = document.querySelector(selector)
  if (tag) {
    tag.setAttribute(`data-first-${attr}`, '')
    return `${selector}[data-first-${attr}] { ${rule} }\n`
  } else {
    return ''
  }
}
