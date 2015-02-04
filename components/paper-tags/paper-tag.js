(function() {
  Polymer({
    onCloseTap: function(e) {
      this.fire('delete', this.tag);
      e.stopPropagation();
    }
  });

}).call(this);
