export default (selector, rule) => {

  let styles = ''

  const tag = document.querySelector(selector)

  if (tag) {

    const attr = selector.replace(/\W/g, '')

    tag.setAttribute(`data-first-${attr}`, '')
    styles += `${selector}[data-first-${attr}] { ${rule} }\n`

  }

  return tag ? styles : ''

}