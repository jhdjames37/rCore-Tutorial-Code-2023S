window.SIDEBAR_ITEMS = {"constant":[["IDLE_PID","The idle task’s pid is 0"]],"enum":[["TaskStatus","The execution status of the current process"]],"fn":[["add_initproc","Add init process to the manager"],["add_task","Add a task to ready queue"],["block_current_and_run_next","Make current task blocked and switch to the next task."],["check_signals_of_current","Check if the current task has any signal to handle"],["current_add_signal","Add signal to the current task"],["current_kstack_top","get the top addr of kernel stack"],["current_process","get current process"],["current_task","Get a copy of the current task"],["current_trap_cx","Get the mutable reference to trap context of current task"],["current_trap_cx_user_va","get the user virtual address of trap context"],["current_user_token","Get the current user token(addr of page table)"],["exit_current_and_run_next","Exit the current ‘Running’ task and run the next task in task list."],["kstack_alloc","Allocate a kernel stack for a task"],["pid2process","Get process by pid"],["pid_alloc","Allocate a pid for a process"],["remove_from_pid2process","Remove item(pid, _some_pcb) from PDI2PCB map (called by exit_current_and_run_next)"],["remove_inactive_task","the inactive(blocked) tasks are removed when the PCB is deallocated.(called by exit_current_and_run_next)"],["remove_task","Remove a task from the ready queue"],["run_tasks","The main part of process execution and scheduling Loop `fetch_task` to get the process that needs to run, and switch the process through `__switch`"],["schedule","Return to idle control flow for new scheduling"],["suspend_current_and_run_next","Make current task suspended and switch to the next task"],["take_current_task","Get current task through take, leaving a None in its place"],["wakeup_task","Wake up a task"]],"mod":[["context","Implementation of [`TaskContext`]"],["id",""],["manager","Implementation of [`TaskManager`]"],["process",""],["processor","Implementation of [`Processor`] and Intersection of control flow"],["signal",""],["switch","Wrap `switch.S` as a function"],["task","Types related to task management & Functions for completely changing TCB"]],"struct":[["INITPROC","Creation of initial process"],["KernelStack","Kernel stack for a task"],["PidHandle","A handle to a pid"],["SignalFlags","Signal flags"],["TaskContext","task context structure containing some registers"],["TaskControlBlock","Task control block structure"]]};