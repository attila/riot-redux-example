<sample-output>
  <h1>{this.opts.store.getState().title}</h1>

  <script>
    this.opts.store.subscribe(function () {
      this.update();
    }.bind(this));
  </script>
</sample-output>