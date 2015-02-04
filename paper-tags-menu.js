(function() {
  Polymer(Polymer.mixin({
    publish: {
      tags: [],
      label: 'Select an item',
      openedIcon: 'arrow-drop-up',
      closedIcon: 'arrow-drop-down'
    },
    selectedItemLabel: '',
    overlayListeners: {
      'core-overlay-open': 'openAction',
      'core-activate': 'activateAction',
      'core-select': 'selectAction'
    },
    activateAction: function(e) {
      this.opened = false;
    },
    selectAction: function(e) {
      var detail;
      detail = e.detail;
      if (detail.isSelected) {
        this.fire('add', detail.item.textContent);
      }
    },
    onDeleteTag: function(e, detail) {
      var index;
      index = this.tags.indexOf(detail);
      if (index === -1) {
        return;
      }
      this.tags.splice(index, 1);
      this.fire('remove', detail);
    }
  }, Polymer.CoreFocusable));

}).call(this);
