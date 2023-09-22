import tasks

for i, item in enumerate(sys.argv):
    print('{0} {1}'.format(i, item))

print(f'{i} {sys.argv[i]}')
