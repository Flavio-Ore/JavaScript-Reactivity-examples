class StringsBasedComponent {
  constructor({ el, data, template }) {
    this.el = el
    this.data = data
    this.template = template
  }

  //Render UI
  render() {
    const $el = document.querySelector(this.el)

    if (!$el) return console.warn($el, ' DOES NOT EXISTS')

    $el.innerHTML = this.template(this.data)

    console.log('Image of the State Component: ', this.data)
  }

  //Update the State reactive
  setState(object) {
    for (const key in object)
      if (this.data.hasOwnProperty(key)) this.data[key] = object[key]

    this.render()
  }

  //Get a image of the State
  getState() {
    return JSON.parse(JSON.stringify(this.data))
  }
}
