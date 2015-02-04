(function() {
  Polymer({
    publish: {
      dropdownLabel: 'Select an item'
    },
    disabled: false,
    domReady: function() {
      this.input = this.$.decorator.input;
    },
    updateLabelVisibility: function(value) {
      this.$.decorator.updateLabelVisibility(value);
    },
    update: function(value) {
      this.$.decorator.update(value);
    }
  });

}).call(this);
