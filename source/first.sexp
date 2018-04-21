mixin('first', ['selector', 'rule'],
  prelude('  const tag = document.querySelector(selector)\n\n',
    ifElseReturn('tag', ['selector'], 'tag', 'first')))
