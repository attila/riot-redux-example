<task-list>
  <ul>
    <li each="{task in this.opts.tasks}">
      <input type="checkbox" id="{task.id}" checked="{task.isComplete}" onchange="{handleCheck}">
      {task.name}
    </li>
  </ul>

  <script>
    this.handleCheck = (e) => {
      this.opts.handlecheck(e.target.id, e.target.checked);
    }
  </script>
</task-list>