Polymer
  onCloseTap: (e) ->
    @fire 'delete', @tag
    e.stopPropagation()
    return
