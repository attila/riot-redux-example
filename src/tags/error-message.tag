<error-message>
  <div show="{this.opts.iserror}">
    {this.opts.message}
    <button onclick="{hideMessage}">X</button>
  </div>

  <script>
    this.hideMessage = () => {
      this.opts.hide();
    }
  </script>
</error-message>