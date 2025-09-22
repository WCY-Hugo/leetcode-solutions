interface Task {
  userId: number;
  taskId: number;
  priority: number;
}

class TaskManager {
  private taskMap: Map<number, Task>;
  private taskQueue: PriorityQueue<Task>;
  private compareFn(a: Task, b: Task): number {
    return a.priority === b.priority
      ? b.taskId - a.taskId
      : b.priority - a.priority;
  }

  constructor(tasks: number[][]) {
    this.taskMap = new Map();
    this.taskQueue = new PriorityQueue(this.compareFn);
    tasks.forEach((t) => {
      const tempT = { userId: t[0], taskId: t[1], priority: t[2] };
      this.taskMap.set(tempT.taskId, tempT);
      this.taskQueue.enqueue(tempT);
    });
  }

  add(userId: number, taskId: number, priority: number): void {
    this.taskMap.set(taskId, { userId, taskId, priority });
    this.taskQueue.enqueue({ userId, taskId, priority });
  }

  edit(taskId: number, newPriority: number): void {
    const userId = this.taskMap.get(taskId).userId;
    this.taskMap.set(taskId, { userId, taskId, priority: newPriority });
    this.taskQueue.enqueue({ userId, taskId, priority: newPriority });
  }

  rmv(taskId: number): void {
    this.taskMap.delete(taskId);
  }

  execTop(): number {
    while (!this.taskQueue.isEmpty()) {
      const taskTop = this.taskQueue.dequeue();
      const taskId = taskTop.taskId;
      if (
        this.taskMap.has(taskId) &&
        taskTop.priority === this.taskMap.get(taskId).priority
      ) {
        const userId = this.taskMap.get(taskId).userId;
        this.taskMap.delete(taskId);
        return userId;
      }
    }
    return -1;
  }
}
