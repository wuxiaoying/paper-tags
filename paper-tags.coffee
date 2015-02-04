Polymer
  publish:
    dropdownLabel: 'Select an item'

  disabled: false

  domReady: ->
    @input = @$.decorator.input
    return

  updateLabelVisibility: (value) ->
    @$.decorator.updateLabelVisibility value
    return

  update: (value) ->
    @$.decorator.update value
    return
