export default (selector, rule) => {

  const tag = document.querySelector(selector)

  if (tag) {

    const attr = selector.replace(/\W/g, '')

    tag.setAttribute(`data-first-${attr}`, '')

    return `${selector}[data-first-${attr}] { ${rule} }\n`

  } else {

    return ''

  }

}
