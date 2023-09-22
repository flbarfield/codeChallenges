import sys
args = sys.argv
tasks = []

try:
    command = args[1]
except IndexError:
    print('Invalid arguments!')
    sys.exit(1)

if command not in ('add', 'remove', 'list'):
    print('Invalid command\nUse add/remove/list')
    sys.exit(1)

if command == 'add':
    print('Adding...')
    title = args[2]
    content = args[3]
    task = title + '|' + content
    file = open('tasks.txt', 'a')
    file.write(task+'\n')
    file.close()
elif command == 'remove':
    print('Removing...')
    try:
        file = open('tasks.txt', 'r')
    except IOError as e:
        print(str(e))
        sys.exit(1)

    tasks = file.readlines()
    tasks = [task.strip() for task in tasks]
    task_id= args[2]
    del tasks[int(task_id)]

    file = open('tasks.txt', 'w')
    tasks = [task + '\n' for task in tasks]
    file.writelines(tasks)
elif command == 'list':
    print('Listing...\n')

    try:
        file = open('tasks.txt', 'r')
    except IOError as e:
        print(str(e))
        sys.exit(1)
    tasks = file.readlines()

    file = open('tasks.txt', 'r')
    tasks = file.readlines()
    if tasks == []:
        print('No tasks present.')
    else:
        print('|-----{0}----{1}----|'.format('title', 'content'))
        tasks = [task.strip() for task in tasks]
        for i in range(len(tasks)):
            title, content = tasks[i].split('|')
            print('-{0}--{1}----{2}-'.format(i, title, content))
    file.close()
else:
    print('Invalid command!')
