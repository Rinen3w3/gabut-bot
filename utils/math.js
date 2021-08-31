const math = require('mathjs')
const mathsteps = require('mathsteps')
const { MessageEmbed } = require('discord.js');


exports.eval = (problem) => {
  let result

  problem = check(problem)

  try {
    result = math.evaluate(problem)
    if(!result) return null
  } catch(err) {
    return null
  }

  if(typeof result == 'number') {
    result = `${result}`
  }
  if(typeof result == 'object') {
    let units = ''
    result.units.forEach(unit => {
      const name = unit.unit.name
      const prefix = unit.prefix.name
      units += `${prefix}${name}`
    })

    result = `${result.value} ${units}`
  }

  return result
}

exports.simplify = (problem) => {
  const steps = mathsteps.simplifyExpression(check(problem))

  if(!steps || steps.length < 1) {
    return null
  }

  const result = steps.reduce((str, step) => {
    str += `before change: ${step.oldNode.toString()}\n`
    str += `change: **${lowerCase(step.changeType)}**\n`
    str += `after change: ${step.newNode.toString()}\n\n`

    return str
  }, '\n')

  return result
}

exports.solve = (equation) => {
  const steps = mathsteps.solveEquation(check(equation))

  if(!steps || steps.length < 1) {
    return null
  }

  const result = steps.reduce((str, step) => {
    str += `before change: ${step.oldEquation.ascii()}\n`
    str += `change: **${lowerCase(step.changeType)}**\n`
    str += `after change: ${step.newEquation.ascii()}\n\n`

    return str
  }, '\n')

  return result
}

exports.latex = (equation) => {
  return new MessageEmbed()
    .setColor('#48B5DF')
    .setDescription(`latex: **${equation}**`)
    .setImage(`http://www.sciweavers.org/tex2img.php?eq=${encodeURIComponent(equation)}&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=`)
}

function lowerCase(str) {
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
}

function check(expression) {
  return expression
}