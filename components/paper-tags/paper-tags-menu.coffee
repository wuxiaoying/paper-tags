Polymer Polymer.mixin
  publish:
    tags: []
    label: 'Select an item'
    openedIcon: 'arrow-drop-up'
    closedIcon: 'arrow-drop-down'

  selectedItemLabel: ''

  overlayListeners:
    'core-overlay-open': 'openAction'
    'core-activate': 'activateAction'
    'core-select': 'selectAction'

  activateAction: (e) ->
    this.opened = false
    return

  selectAction: (e) ->
    detail = e.detail
    if detail.isSelected
      @fire 'add', detail.item.textContent
    return

  onDeleteTag: (e, detail) ->
    index = @tags.indexOf detail
    return if index is -1
    @tags.splice index, 1
    @fire 'remove', detail
    return

, Polymer.CoreFocusable
