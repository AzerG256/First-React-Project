class Task{

        constructor(name,isChecked)
    {
        if (typeof name !== 'string') {
            throw new Error('Task name must be a string');
          }
          if (typeof isChecked !== 'boolean') {
            throw new Error('isChecked must be a boolean');
          }
        this.name=name;
        this.isChecked=isChecked;
    }
}
export default Task;