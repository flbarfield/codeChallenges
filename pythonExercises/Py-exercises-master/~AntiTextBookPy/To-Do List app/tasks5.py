import sys

ADD, REMOVE, LIST = 'add', 'remove', 'list'

def main():
    args = sys.argv
    try:
        command = args[1]
    except IndexError:
        print('Invalid Argument!')
        sys.exit(1)

    if command == ADD:
        title = args[2]
        content = args [3]
        add_task(title, content)
    elif command == REMOVE:
        task_id = args[2]
        remove_task(task_id)
    elif command == LIST:
        list_task()
    else:
        print('Invalid Command')

def remove_task(task_id):
    try:
        file = open('tasks.txt', 'r')
    except IOError as e:
        print(str(e))
        sys.exit(1)
    tasks = file.readlines()
    tasks = [task.strip() for task in tasks]
    del tasks[int(task_id)]

def list_task():
    try:
        file = open('tasks.txt', 'r')
    except IOError as e:
        print(str(e))
        sys.exit(1)
    tasks = file.readlines()
    if len (tasks) == 0:
        print('There are no tasks!')
    else:
        print('|-{0}----{1}----{2}----|'.format('index', 'title', 'content'))
        tasks = [task.strip() for task in tasks]
        for i in range(len(tasks)):
            title, content = tasks[i].split('|')
            print('|-{0}----{1}----{2}----|'.format(i, title, content))
    file.close()

def add_task(title, content):
    task = title + '|' + content
    file = open('tasks.txt', 'a')
    file.write(task + '\n')
    file.close()

main()
